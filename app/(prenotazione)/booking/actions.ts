"use server";

import {fromZonedTime, toZonedTime} from "date-fns-tz";
import {add, format, formatISO, isAfter, isBefore, parse} from "date-fns";
import {google} from "googleapis";
import {calendar_v3} from "@googleapis/calendar";
import {revalidatePath} from "next/cache";
import {servizi} from "./types";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

const calendarId = process.env.CALENDAR_ID;

const initGoogleCalendar = async () => {
  try {
    const credentials = {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    };
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: SCOPES,
    });

    const calendar = google.calendar({version: "v3", auth});

    console.log("Google Calendar API initialized:");
    return calendar;
  } catch (error) {
    console.error("Error initializing Google Calendar API:", error);
  }
};

const generateSlots = (startTime: Date, endTime: Date, interval: number) => {
  const slots = [];
  let currentTime = startTime;

  while (isBefore(currentTime, endTime) || currentTime.getTime() === endTime.getTime()) {
    slots.push(format(currentTime, 'HH:mm'));
    currentTime = add(currentTime, {minutes: interval});
  }

  return slots;
};

const availableSlots = generateSlots(
    new Date(2025, 0, 1, 9, 0), // Start time: 9:00 AM
    new Date(2025, 0, 1, 18, 30), // End time: 6:30 PM
    15 // Interval: 15 minutes
);

export const buildDateSlots = async (date: Date) => {
  return availableSlots.map(slot => {
    const cetDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        +slot.slice(0, 2),
        +slot.slice(3, 5)
    );
    return fromZonedTime(cetDateTime, 'Europe/Paris');
  });
};

export const getAvailableSlots = async (date: string) => {
  const calendar = await initGoogleCalendar();

  const dayDate = parse(date, 'yyyyMMdd', new Date());
  const response = await calendar?.events.list({
    calendarId: calendarId,
    eventTypes: ["default"],
    timeMin: dayDate.toISOString(),
    timeMax: add(dayDate, {days: 1}).toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = response?.data?.items || [];
  const dateSlots = await buildDateSlots(dayDate);

  const availableSlots = dateSlots.filter(slot => {
    const slotEnd = add(slot, {minutes: 15});

    // Check if this slot conflicts with any existing event
    const hasConflict = events.some((event: calendar_v3.Schema$Event) => {
      const eventStart = new Date(event.start?.dateTime || '');
      const eventEnd = new Date(event.end?.dateTime || '');
      return isBefore(slot, eventEnd) && isAfter(slotEnd, eventStart);
    });

    return !hasConflict;
  });

  // Convert available Date objects to string time slots
  return availableSlots.map(slot => {
    return format(toZonedTime(slot, 'Europe/Paris'), 'HH:mm');
  });
};

export const createEvent = async (
    data: {
      serviceId: string
      date: Date
      time: string
      nome: string
      cognome: string
      email: string
      telefono: string
    }
) => {
  console.log("createEvent")

  const calendar = await initGoogleCalendar();

  const service = servizi.find(service => service.id === data.serviceId)!

  // Parse the date and time in UTC timezone
  const [hours, minutes] = data.time.split(":").map(Number);
  data.date.setHours(hours, minutes);
  const utcDate = fromZonedTime(data.date, 'Europe/Paris');

  // Convert date to UTC
  const startDateTime = new Date(utcDate.toUTCString());
  const endDateTime = add(startDateTime, {minutes: service.durata});

  console.log(startDateTime)

  const event = {
    summary: `${service.nome} - ${data.nome} ${data.cognome}`,
    description: `${data.email} \n ${data.telefono}`,
    start: {
      dateTime: formatISO(startDateTime),
      timeZone: "UTC",
    },
    end: {
      dateTime: formatISO(endDateTime),
      timeZone: "UTC",
    },
  };

  const response = await calendar?.events.insert({
    calendarId: calendarId,
    requestBody: event,
    sendUpdates: "all"
  })

  if (response?.data) {
    if (response.status !== 200) {
      console.log("Failed to insert event");
    }
  } else {
    console.log("Failed to insert event: Calendar not initialized");
  }

  revalidatePath("/");
  return {status: response?.status};
};