import {NewBookingEmail} from "./template.tsx";
import {renderAsync} from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import ical, { ICalCalendarMethod } from 'npm:ical-generator@8.1.1';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const handler = async (_request: Request): Promise<Response> => {
  const json = await _request.json();
  const record = json.record;

  const html = await renderAsync(
      React.createElement(NewBookingEmail, {
        id: record.id,
        name: record.name,
        surname: record.surname,
        email: record.email,
        phone: record.phone,
        service: record.service,
        start: record.start,
        end: record.end,
      })
  )

  const calendar = ical({ name: `booking_${record.id}` });
  calendar.method(ICalCalendarMethod.REQUEST);
  calendar.createEvent({
    start: new Date(record.start),
    end: new Date(record.end),
    timezone: 'UTC',
    organizer: 'Acconciature Micelli e Vignati <micelli.vignati@hotmail.it>',
    summary: `${record.service} - ${record.name} ${record.surname}`,
    description: `Prenotazione effettuata via web da ${record.name} ${record.surname} \n${record.email}\n${record.phone}`,
    attendees: [
      { name: `${record.name} ${record.surname}`, email: record.email },
    ],
  });


  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="invite.ics"',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Prenotazioni Web <onboarding@resend.dev>',
      to: 'matteoroman4@gmail.com',
      subject: `Nuova Prenotazione ${record.id}`,
      html: html,
      attachments: [
        {
          content: calendar.toString(),
          filename: 'invite.ics',
          content_type: 'text/calendar; charset="UTF-8"; method=REQUEST',
        },
      ],
    }),
  })

  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: res.ok ? 200 : 400,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

Deno.serve(handler)


/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/resend' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
