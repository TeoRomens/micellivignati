"use server"

import { fromZonedTime, toZonedTime } from "date-fns-tz";
import {add, endOfDay, format, isAfter, isBefore, startOfDay} from "date-fns";
import { servizi } from "./services.ts";
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
    return fromZonedTime(cetDateTime, "Europe/Rome");
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
  const isSaturday = date.getDay() === 6; // Saturday

  const closingTime = new Date(date);
  closingTime.setHours(19, 0, 0, 0);

  const availableSlots = dateSlots.filter((slot) => {
    const slotEnd = add(slot, { minutes: service.durata });

    // Skip slots that end after the salon's closing time
    if (isAfter(slotEnd, closingTime)) {
      return false;
    }

    // Check if the slot overlaps with any existing booking
    const hasConflict = data?.some((booking) => {
      const bookingStart = new Date(booking.start);
      const bookingEnd = new Date(booking.end);

      // Conflict occurs if the new slot overlaps with an existing booking
      return (
          (isBefore(slot, bookingEnd) && isAfter(slot, bookingStart)) || // Slot starts during an existing booking
          (isBefore(slotEnd, bookingEnd) && isAfter(slotEnd, bookingStart)) || // Slot ends during an existing booking
          (isBefore(bookingStart, slotEnd) && isAfter(bookingEnd, slot)) // Slot fully overlaps with an existing booking
      );
    });

    return !hasConflict;
  });

  // Convert available Date objects to string time slots
  return availableSlots.map((slot) => {
    return format(toZonedTime(slot, "Europe/Rome"), "HH:mm");
  });
};

export const createEvent = async (
    formData: {
      serviceId: string;
      date: Date;
      time: string;
      name: string;
      surname: string;
      email: string;
      phone: string;
    }
) => {
  const supabase = await createClient()

  const service = servizi.find((service) => service.id === formData.serviceId);
  if (!service) throw new Error("Service not found");

  const [hours, minutes] = formData.time.split(":").map(Number);
  formData.date.setHours(hours, minutes)
  const start = formData.date
  const end = add(formData.date, {minutes: service.durata});

  const { error, status } = await supabase.from("booking").insert({
    service: service.nome,
    start: start.toISOString(),
    end: end.toISOString(),
    name: formData.name,
    surname: formData.surname,
    email: formData.email,
    phone: formData.phone,
  });

  if (error) {
    console.error("Error inserting data into database:", error);
    return status;
  }

  console.log("Event successfully inserted into the database");

  return status
};