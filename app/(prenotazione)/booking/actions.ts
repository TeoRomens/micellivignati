"use server"

import { fromZonedTime, toZonedTime } from "date-fns-tz";
import {add, endOfDay, format, isAfter, isBefore, startOfDay} from "date-fns";
import { servizi } from "./types";
import { createClient } from "@/utils/supabase/server";
import * as fs from "fs";

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

  const isSaturday = date.getDay() === 6; // Check if the day is Saturday (6 = Saturday)

  const availableSlots = dateSlots.filter((slot) => {
    const slotEnd = add(slot, { minutes: 15 }); // Adjust slot end by 15 minutes

    // Check if the slot is in conflict with any existing booking
    const conflictingBookings = data?.filter((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return isBefore(slot, eventEnd) && isAfter(slotEnd, eventStart);
    });

    const slotWithServiceEnd = add(slot, { minutes: service.durata });
    const conflictsWithServiceDuration = data?.filter((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return isBefore(slotWithServiceEnd, eventEnd) && isAfter(slotWithServiceEnd, eventStart);
    });

    // For Saturdays, allow up to two overlapping events
    if (isSaturday) {
      return (
          (conflictingBookings?.length ?? 0) < 2 &&
          (conflictsWithServiceDuration?.length ?? 0) < 2
      );
    }

    // For other days, no conflicts are allowed
    return (conflictingBookings?.length ?? 0) === 0 && (conflictsWithServiceDuration?.length ?? 0) === 0;
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
  const supabase = await createClient()

  const service = servizi.find((service) => service.id === data.serviceId);
  if (!service) throw new Error("Service not found");

  const [hours, minutes] = data.time.split(":").map(Number);
  const start = data.date;
  start.setHours(hours, minutes)
  const end = add(start, {minutes: service.durata});

  const { data: booking, error, status } = await supabase.from("booking").insert({
    service: service.nome,
    start: start.toISOString(),
    end: end.toISOString(),
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
  }).select().single();

  if (error) {
    console.error("Error inserting data into database:", error);
    return status;
  }

  console.log("Event successfully inserted into the database");

  const ical = require('ics');
  const event = {
    start: formatDateToICS(start),
    startInputType: 'utc',
    end: formatDateToICS(end),
    endInputType: 'utc',
    title: `${service.nome} - ${data.name} ${data.surname}`,
    description: `Prenotazione effettuata via web da ${data.name} ${data.surname} \n${data.email}\n${data.phone}`,
    status: 'CONFIRMED',
  };
  const { error: icsError, value } = ical.createEvent(event);
  if (icsError) {
    console.error('Error generating ICS event:', icsError);
    return status;
  }

  const filePath = `/tmp/booking_${booking.id}.ics`;
  fs.writeFileSync(filePath, value);

  // Upload the file to Supabase Storage
  const file = fs.readFileSync(filePath);
  const { error: uploadError } = await supabase.storage
      .from('bookings')
      .upload(`booking_${booking.id}.ics`, file, {
        contentType: 'text/calendar',
        cacheControl: '3600',
      });

  if (uploadError) {
    console.error('Error uploading ICS to Supabase:', uploadError);
    return status;
  }
  console.log('ICS file uploaded');

  fs.unlinkSync(filePath);

  return status
};

const formatDateToICS = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
};