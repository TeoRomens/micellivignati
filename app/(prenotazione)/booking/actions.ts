"use server"

import { fromZonedTime, toZonedTime } from "date-fns-tz";
import {add, endOfDay, format, isAfter, isBefore, startOfDay} from "date-fns";
import { servizi } from "./types";
import { createClient } from "@/utils/supabase/server";

const generateSlots = (startTime: Date, endTime: Date, interval: number) => {
  const slots = [];
  let currentTime = startTime;

  while (isBefore(currentTime, endTime) || currentTime.getTime() === endTime.getTime()) {
    slots.push(format(currentTime, "HH:mm"));
    currentTime = add(currentTime, { minutes: interval });
  }

  return slots;
};

const availableSlots = generateSlots(
    new Date(2025, 0, 1, 9, 0), // Start time: 9:00 AM
    new Date(2025, 0, 1, 18, 30), // End time: 6:30 PM
    15 // Interval: 15 minutes
);

const buildDateSlots = async (date: Date) => {
  return availableSlots.map((slot) => {
    const cetDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        +slot.slice(0, 2),
        +slot.slice(3, 5)
    );
    return fromZonedTime(cetDateTime, "Europe/Paris");
  });
};

export const getAvailableSlots = async (date: Date, serviceId: string) => {
  const supabase = await createClient();

  const service = servizi.find((service) => service.id === serviceId);
  if (!service) throw new Error("Service not found");

  // Define the start and end of the current day
  const startOfCurrentDay = startOfDay(date);
  const endOfCurrentDay = endOfDay(date);

  // Fetch data from the booking table for the current day
  const { data, error } = await supabase
      .from("booking")
      .select("start, end")
      .gte("start", startOfCurrentDay.toISOString())
      .lte("start", endOfCurrentDay.toISOString());

  if (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }

  console.log("Fetched bookings:", data);

  const dateSlots = await buildDateSlots(date);

  const availableSlots = dateSlots.filter((slot) => {
    const slotEnd = add(slot, { minutes: 15 }); // Adjust slot end by 15 minutes

    // Check if the slot is in conflict with any existing booking
    const hasConflict = data?.some((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return isBefore(slot, eventEnd) && isAfter(slotEnd, eventStart);
    });

    // Now check if the slot plus the service duration conflicts with any existing booking
    const slotWithServiceEnd = add(slot, { minutes: service.durata });
    const hasConflictWithServiceDuration = data?.some((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      // Exclude slots that would end inside an existing event
      return isBefore(slotWithServiceEnd, eventEnd) && isAfter(slotWithServiceEnd, eventStart);
    });

    return !hasConflict && !hasConflictWithServiceDuration;
  });

  // Convert available Date objects to string time slots
  return availableSlots.map((slot) => {
    return format(toZonedTime(slot, "Europe/Paris"), "HH:mm");
  });
};

export const createEvent = async (
    data: {
      serviceId: string;
      date: Date;
      time: string;
      name: string;
      surname: string;
      email: string;
      phone: string;
    }
) => {
  console.log("createEvent");

  const supabase = await createClient()

  const service = servizi.find((service) => service.id === data.serviceId);
  if (!service) throw new Error("Service not found");

  const [hours, minutes] = data.time.split(":").map(Number);
  const start = data.date;
  start.setHours(hours, minutes)
  const end = add(start, {minutes: service.durata});

  const { error, status } = await supabase.from("booking").insert({
    service: service.nome,
    start: start.toISOString(),
    end: end.toISOString(),
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
  });

  if (error) {
    console.error("Error inserting data into database:", error);
  }

  console.log("Event successfully inserted into the database");
  console.log(status);
  return status
};
