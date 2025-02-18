"use client"

import React, {useEffect, useId, useState} from "react"
import {
  AtSign,
  ChevronDown,
  ChevronLeft,
  CircleCheck,
  CircleX,
  LoaderCircle,
  Phone,
  Scissors
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {servizi} from "./services.ts"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Calendar} from "@/components/ui/calendar"
import {ScrollArea} from "@/components/ui/scroll-area"
import {add, format} from "date-fns"
import {Input} from "@/components/ui/input"
import {createEvent, getAvailableSlots} from "@/app/(prenotazione)/booking/actions"
import {Skeleton} from "@/components/ui/skeleton"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import {cn} from "@/lib/utils"
import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ical, {ICalCalendarMethod} from "ical-generator";
import {toast} from "sonner";

export default function BookingForm() {
  const id = useId()
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1)
  const [serviceId, setServiceId] = useState<string>()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [slots, setAvailableSlots] = useState<string[]>()
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [responseCode, setResponseCode] = useState<number>()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleDayPickerSelect = async (date: Date | undefined) => {
    if (!date) {
      setSelectedDate(undefined)
      setAvailableSlots([])
    } else {
      if (date.getDay() === 0) {
        setSelectedDate(undefined)
        setAvailableSlots([])
      } else {
        setSelectedDate(date)
        setSelectedTime(undefined)
        setIsLoading(true)
        try {
          const availableSlots = await getAvailableSlots(date, serviceId!)
          setAvailableSlots(availableSlots)
        } catch (error) {
          console.error(error)
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}
    switch (step) {
      case 1:
        if (!serviceId) newErrors.serviceId = "Seleziona un servizio"
        break
      case 2:
        if (!selectedDate) newErrors.date = "Seleziona una data"
        if (!selectedTime) newErrors.time = "Seleziona un orario"
        break
      case 3:
        if (!name) newErrors.nome = "Inserire nome"
        if (!surname) newErrors.cognome = "Inserire cognome"
        if (!email) newErrors.email = "Inserire email"
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email non valida"
        if (!phone) newErrors.telefono = "Inserire numero di telefono"
        else if (!/^\+?[0-9]{10,15}$/.test(phone)) newErrors.telefono = "Il numero di telefono non è valido"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handlePrevStep = () => {
    if (currentStep == 5) {
      router.back()
      return
    }
    if (!isLoading) {
      setCurrentStep((prev) => Math.max(prev - 1, 1))
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(4)) {
      setIsLoading(true)
      try {
        const formData = {
          serviceId: serviceId!,
          date: selectedDate!,
          time: selectedTime!,
          name: name,
          surname: surname,
          email: email,
          phone: phone,
        }
        const response = await createEvent(formData)
        setResponseCode(response)
        setCurrentStep(5)
      } catch (error) {
        console.error("Error creating event:", error)
        setResponseCode(500)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    toast.warning(
        <div>
          Per prenotazioni al sabato o per qualsiasi necessità, contattare telefonicamente il negozio al numero
          <br/>
          <a href="tel:0331544221" rel="noopener noreferrer" className="underline">
            0331-544221
          </a>
        </div>,
        {
          position: 'top-right',
          duration: 10000,
          closeButton: true
        })
  }, [])

  return (
      <>
        <header className="fixed left-1 top-1">
          <Button variant="link" onClick={handlePrevStep} disabled={currentStep == 1}>
            <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true"/>
            Indietro
          </Button>
        </header>
        <main className="flex items-center justify-center min-h-screen px-8">
          <form name="appointment-booking-form" onSubmit={onSubmit} className="max-w-md w-full max-h-[80vh]">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                  <motion.div
                      key={currentStep}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.2}}
                  >
                    <Label>Seleziona un servizio</Label>
                    <RadioGroup
                        defaultValue={serviceId}
                        value={serviceId}
                        className="mt-4 grid grid-cols-2 max-h-[70vh] overflow-y-auto"
                    >
                      {servizi.map((item) => (
                          <div
                              key={`${id}-${item.nome}`}
                              className="relative flex flex-col gap-1 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
                          >
                            <div className="flex justify-between mb-2">
                              <RadioGroupItem
                                  id={`${id}-${item.nome}`}
                                  value={item.id}
                                  className="order-1 after:absolute after:inset-0"
                                  onClick={() => {
                                    setServiceId(item.id)
                                  }}
                              />
                              <Scissors className="opacity-60" size={16} strokeWidth={2} aria-hidden="true"/>
                            </div>
                            <Label htmlFor={`${id}-${item.nome}`}>{item.nome}</Label>
                            <p className="text-xs text-muted-foreground">{item.durata} minuti</p>
                          </div>
                      ))}
                    </RadioGroup>
                    {errors.serviceId &&
                        <p className="text-xs text-destructive mt-2">
                          {errors.serviceId}
                        </p>
                    }
                    <Button type="button" onClick={handleNextStep} className="mt-6 w-full">
                      Avanti
                    </Button>
                  </motion.div>
              )}


              {currentStep === 2 && (
                  <motion.div
                      key={currentStep}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.2}}
                      className="max-w-md w-fit mx-auto"
                  >
                    <Label>Quale giorno e orario vuoi prenotare?</Label>
                    <div className="mt-4 rounded-lg border border-border">
                      <div className="flex max-sm:flex-col">
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDayPickerSelect}
                            className="p-2 sm:pe-5"
                            disabled={[{
                              before: new Date()
                            },
                              (date) => date.getDay() == 6 || date.getDay() == 0,
                            ]}
                        />
                        <div className="relative w-full max-sm:h-48 sm:w-40">
                          <div className="absolute inset-0 border-border py-4 max-sm:border-t">
                            <ScrollArea className="h-full border-border sm:border-s">
                              <div className="space-y-3">
                                <div className="flex h-5 shrink-0 items-center px-5">
                                  <p className="text-sm font-medium">
                                    {selectedDate
                                        ?.toLocaleDateString("it-IT", {
                                          weekday: "long",
                                          day: "numeric",
                                          month: "numeric",
                                        })
                                        .charAt(0)
                                        .toUpperCase()}
                                    {selectedDate
                                        ?.toLocaleDateString("it-IT", {
                                          weekday: "long",
                                          day: "numeric",
                                          month: "numeric",
                                        })
                                        .slice(1)}
                                  </p>
                                </div>
                                {isLoading ? (
                                    <div className="space-y-2 px-5">
                                      {Array.from({length: 5}).map((_, index) => (
                                          <Skeleton
                                              key={`${id}-time-skeleton-${index}`}
                                              className="h-9 rounded-md w-full animate-pulse"
                                          />
                                      ))}
                                    </div>
                                ) : (
                                    <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                                      {slots && slots.map((slot) => (
                                          <Button
                                              key={`${id}-${slot}`}
                                              type="button"
                                              variant={selectedTime === slot ? "default" : "outline"}
                                              size="sm"
                                              className="w-full"
                                              onClick={() => {
                                                setSelectedTime(slot)
                                              }}
                                          >
                                            {slot}
                                          </Button>
                                      ))}
                                    </div>
                                )}
                              </div>
                            </ScrollArea>
                          </div>
                        </div>
                      </div>
                    </div>
                    {errors.date && <p className="text-xs text-destructive mt-2">{errors.date}</p>}
                    {errors.time && <p className="text-xs text-destructive mt-2">{errors.time}</p>}
                    <Button type="button" onClick={handleNextStep} className="mt-6 w-full">
                      Avanti
                    </Button>
                  </motion.div>
              )}

              {currentStep === 3 && (
                  <motion.div
                      key={currentStep}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.2}}
                  >
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">
                            Nome
                          </Label>
                          <Input
                              id="nome"
                              name="nome"
                              type="text"
                              placeholder="Inserisci il nome"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                          />
                          {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cognome">
                            Cognome
                          </Label>
                          <Input
                              id="cognome"
                              name="cognome"
                              type="text"
                              placeholder="Inserisci il cognome"
                              value={surname}
                              onChange={(e) => setSurname(e.target.value)}
                              required
                          />
                          {errors.cognome && <p className="text-xs text-destructive">{errors.cognome}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefono">Telefono</Label>
                        <RPNInput.default
                            className="flex rounded-lg shadow-sm shadow-black/5"
                            international
                            defaultCountry={"IT"}
                            flagComponent={FlagComponent}
                            countrySelectComponent={CountrySelect}
                            inputComponent={PhoneInput}
                            id="telefono"
                            name="telefono"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(value) => setPhone(value || "")}
                            required
                        />
                        {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                        <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
                          Non condivideremo il tuo numero con nessuno.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Input
                              id="email"
                              name="email"
                              className="peer ps-9"
                              placeholder="Email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                          />
                          <div
                              className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                            <AtSign size={16} strokeWidth={2} aria-hidden="true"/>
                          </div>
                        </div>
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                        <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
                          Non condivideremo la tua email a nessuno
                        </p>
                      </div>
                    </div>
                    <Button type="button" onClick={handleNextStep} className="mt-6 w-full">
                      Avanti
                    </Button>
                  </motion.div>
              )}

              {currentStep === 4 && (
                  <motion.div
                      key={currentStep}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.2}}
                  >
                    <h2 className="mb-4 text-md font-medium">Riepilogo</h2>
                    <div
                        className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
                      <div className="flex grow items-start gap-3">
                        <div className="grid gap-2">
                          <Label htmlFor={id}>{servizi.find((service) => service.id === serviceId)?.nome}</Label>
                          <p id={`${id}-description`} className="text-xs text-muted-foreground">
                            Data e Orario
                          </p>
                          <Label htmlFor={id}>{selectedDate && format(selectedDate, "dd/MM/yyyy")}</Label>
                          <Label htmlFor={id}>{selectedTime}</Label>
                          <p id={`${id}-description`} className="text-xs text-muted-foreground">
                            Dati Cliente
                          </p>
                          <Label htmlFor={id}>
                            {name} {surname}
                          </Label>
                          <Label htmlFor={id}>{phone}</Label>
                          <Label htmlFor={id}>{email}</Label>
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="mt-6 w-full" disabled={isLoading}>
                      {isLoading && (
                          <LoaderCircle className="-ms-1 me-2 animate-spin" size={16} strokeWidth={2}
                                        aria-hidden="true"/>
                      )}
                      Conferma
                    </Button>
                  </motion.div>
              )}

              {currentStep === 5 && (
                  <motion.div
                      key={currentStep}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.2}}
                  >
                    {responseCode === 201 && (
                        <div className="space-y-2">
                          <CircleCheck
                              className="-mt-0.5 me-3 inline-flex text-emerald-500"
                              size={48}
                              strokeWidth={2}
                              aria-hidden="true"
                          />
                          <h1 className="text-2xl/[1.1] font-bold tracking-tight text-foreground">
                            Prenotazione Confermata!
                          </h1>
                          <p className="text-sm text-muted-foreground">
                            Salva questa schermata per ricordarti o aggiungila al calendario!
                          </p>
                          <div
                              className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
                            <div className="flex grow items-start gap-3">
                              <div className="grid gap-2">
                                <Label htmlFor={id}>{servizi.find((service) => service.id === serviceId)?.nome}</Label>
                                <p id={`${id}-description`} className="text-xs text-muted-foreground">
                                  Data e Orario
                                </p>
                                <Label htmlFor={id}>{selectedDate && format(selectedDate, "dd/MM/yyyy")}</Label>
                                <Label htmlFor={id}>{selectedTime}</Label>
                                <p id={`${id}-description`} className="text-xs text-muted-foreground">
                                  Dati Cliente
                                </p>
                                <Label htmlFor={id}>
                                  {name} {surname}
                                </Label>
                                <Label htmlFor={id}>{phone}</Label>
                                <Label htmlFor={id}>{email}</Label>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button
                                type="button"
                                className="mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                                onClick={() => {
                                  if (!selectedDate || !selectedTime) {
                                    alert("Seleziona una data e un orario prima di aggiungere al calendario.");
                                    return;
                                  }

                                  const service = servizi.find((s) => s.id === serviceId);
                                  if (!service) {
                                    alert("Servizio non trovato.");
                                    return;
                                  }

                                  const [hours, minutes] = selectedTime.split(":").map(Number);
                                  const start = new Date(selectedDate); // Crea una nuova data per evitare effetti collaterali
                                  start.setHours(hours, minutes, 0, 0);
                                  const end = add(start, {minutes: service.durata});

                                  const calendar = ical({name: 'booking'});
                                  calendar.method(ICalCalendarMethod.ADD);
                                  calendar.createEvent({
                                    start,
                                    end,
                                    timezone: "UTC",
                                    organizer: {name: 'Micelli e Vignati', email: 'micelli.vignati@hotmail.it'},
                                    summary: `Parrucchiera - ${service.nome}`,
                                    description: "Per qualsiasi informazione e/o modifica telefonare direttamente al negozio.",
                                  });

                                  const icsContent = calendar.toString();
                                  const blob = new Blob([icsContent], {type: 'text/calendar'});
                                  const url = URL.createObjectURL(blob);
                                  const link = document.createElement('a');
                                  link.href = url;
                                  link.download = `booking_${serviceId}.ics`;
                                  link.click();
                                  URL.revokeObjectURL(url);
                                }}
                            >
                              Aggiungi al calendario
                            </Button>
                          </div>

                        </div>
                    )}
                    {responseCode !== 201 && (
                        <div className="space-y-2">
                          <CircleX
                              className="-mt-0.5 me-3 inline-flex text-red-500"
                              size={48}
                              strokeWidth={1.5}
                              aria-hidden="true"
                          />
                          <h1 className="text-2xl/[1.1] font-bold tracking-tight text-foreground">
                            Errore durante la prenotazione.
                          </h1>
                          <p className="text-sm text-muted-foreground">
                            Si prega di telefonare il negozio per prenotare un appuntamento.
                          </p>
                        </div>
                    )}
                  </motion.div>
              )}
            </AnimatePresence>
          </form>
        </main>
      </>
  )
}

const PhoneInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({className, ...props}, ref) => {
  return (
      <Input className={cn("-ms-px rounded-s-none shadow-none focus-visible:z-10", className)} ref={ref} {...props} />
  )
})

PhoneInput.displayName = "PhoneInput"

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({disabled, value, onChange, options}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country)
  }

  return (
      <div
          className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
        <div className="inline-flex items-center gap-1" aria-hidden="true">
          <FlagComponent country={value} countryName={value} aria-hidden="true"/>
          <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true"/>
        </span>
        </div>
        <select
            disabled={disabled}
            value={value}
            onChange={handleSelect}
            className="absolute inset-0 text-sm opacity-0"
            aria-label="Select country"
        >
          <option key="default" value="">
            Select a country
          </option>
          {options
              .filter((x) => x.value)
              .map((option, i) => (
                  <option key={option.value ?? `empty-${i}`} value={option.value}>
                    {option.label} {option.value && `+${RPNInput.getCountryCallingCode(option.value)}`}
                  </option>
              ))}
        </select>
      </div>
  )
}

const FlagComponent = ({country, countryName}: RPNInput.FlagProps) => {
  const Flag = flags[country]

  return (
      <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? <Flag title={countryName}/> : <Phone size={16} aria-hidden="true"/>}
    </span>
  )
}

