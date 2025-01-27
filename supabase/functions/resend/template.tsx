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
  icsFileUrl: string
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
                                  icsFileUrl,
                                }: NewBookingEmailProps) => {
  const formattedStart = format(new Date(start), 'dd/MM/yyyy HH:mm')
  const formattedEnd = format(new Date(end), 'dd/MM/yyyy HH:mm')

  return (
      <Html>
        <Head />
        <Preview>{nome} {cognome} - {service}</Preview>
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

            {/* Centering the button */}
            <div style={buttonContainer}>
              <Button style={button} href={icsFileUrl}>
                Aggiungi al calendario
              </Button>
            </div>

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
  padding: '20px 0 48px',
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

const button = {
  fontSize: '14px',
  backgroundColor: '#7161ef',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
}

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
}

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
}