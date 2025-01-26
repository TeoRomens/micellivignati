import {Brush, Eraser, Scissors, SwatchBook} from "lucide-react";

export type Appuntamento = {
  start: string;
  end: string;
  duration: number;
}[];

export const servizi = [
  { id: "1", nome: "Taglio Uomo", durata: 60, Icon: Scissors },
  { id: "2", nome: "Taglio Donna", durata: 60, Icon: Scissors },
  { id: "3", nome: "Piega", durata: 60, Icon: Eraser },
  { id: "4", nome: "Colore", durata: 60, Icon: Scissors },
  { id: "5", nome: "Tinta", durata: 60, Icon: SwatchBook },
  { id: "6", nome: "Colpi di sole", durata: 60, Icon: Brush },
];

export const timeSlots = [
  { time: "09:00", available: true },
  { time: "09:15", available: true },
  { time: "09:30", available: true },
  { time: "09:45", available: true },
  { time: "10:00", available: true },
  { time: "10:15", available: true },
  { time: "10:30", available: true },
  { time: "10:45", available: true },
  { time: "11:00", available: true },
  { time: "11:15", available: true },
  { time: "11:30", available: true },
  { time: "11:45", available: true },
  { time: "12:00", available: true },
  { time: "12:15", available: true },
  { time: "12:30", available: true },
  { time: "12:45", available: true },
  { time: "13:00", available: true },
  { time: "13:15", available: true },
  { time: "13:30", available: true },
  { time: "13:45", available: true },
  { time: "14:00", available: true },
  { time: "14:15", available: true },
  { time: "14:30", available: true },
  { time: "14:45", available: true },
  { time: "15:00", available: true },
  { time: "15:15", available: true },
  { time: "15:30", available: true },
  { time: "15:45", available: true },
  { time: "16:00", available: true },
  { time: "16:15", available: true },
  { time: "16:30", available: true },
  { time: "16:45", available: true },
  { time: "17:00", available: true },
  { time: "17:15", available: true },
  { time: "17:30", available: true },
  { time: "17:45", available: true },
  { time: "18:00", available: true },
  { time: "18:15", available: true },
  { time: "18:30", available: true },
  { time: "18:45", available: true },
];
