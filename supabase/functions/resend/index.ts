import {NewBookingEmail} from "./template.tsx";
import {renderAsync} from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import {createClient} from "npm:@supabase/supabase-js@latest";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const handler = async (_request: Request): Promise<Response> => {
  const json = await _request.json();
  const record = json.record;

  const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  );

  const {data: icsFileUrl} = supabase.storage
      .from('bookings')
      .getPublicUrl(`booking_${record.id}.ics`)

  const html = await renderAsync(
      React.createElement(NewBookingEmail, {
        id: record.id,
        name: record.nome,
        surname: record.cognome,
        email: record.email,
        phone: record.phone,
        service: record.service,
        start: record.start,
        end: record.end,
        icsFileUrl: icsFileUrl.publicUrl,
      })
  )

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Booking Management <onboarding@resend.dev>',
      to: 'matteoroman4@gmail.com',
      subject: `Nuova Prenotazione ${record.id}`,
      html: html,
    }),
  })

  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
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
