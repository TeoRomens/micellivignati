import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'
import { format } from 'npm:date-fns@4.1.0'

interface NewBookingEmailProps {
  id: number
  name: string
  surname: string
  email: string
  phone: string
  service: string
  start: string
  end: string
}

export const NewBookingEmail = ({
                                  id,
                                  name,
                                  surname,
                                  email,
                                  phone,
                                  service,
                                  start,
                                  end,
                                }: NewBookingEmailProps) => {
  const formattedStart = format(new Date(start), 'dd/MM/yyyy HH:mm')
  const formattedEnd = format(new Date(end), 'dd/MM/yyyy HH:mm')

  return (
      <Html>
        <Head />
        <Preview>{name} {surname} - {service}</Preview>
        <Body style={main}>
          <Container style={container}>
            <Text style={title}>Nuova prenotazione #{id}</Text>

            <Section style={section}>
              <Text style={text}>
                <strong>Nome:</strong> {name} {surname}
              </Text>
              <Text style={text}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={text}>
                <strong>Telefono:</strong> {phone}
              </Text>
              <Text style={text}>
                <strong>Servizio:</strong> {service}
              </Text>
              <Text style={text}>
                <strong>Inizio:</strong> {formattedStart}
              </Text>
              <Text style={text}>
                <strong>Fine:</strong> {formattedEnd}
              </Text>
            </Section>

            <Text style={footer}>Creato da Matteo Roman</Text>
          </Container>
        </Body>
      </Html>
  )
}

export default NewBookingEmail

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
}

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '10px 0 20px',
}

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
  textAlign: 'center' as const,
}

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
}

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
}

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '50px',
}