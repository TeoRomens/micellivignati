import {Brush, Eraser, Scissors, SwatchBook} from "lucide-react";

export type Prenotazioni = {
  ora_inizio: string;
  durata: string;
}[];

// Aggiungere ogni nuovo id al form
export const servizi = [
  { id: "1", nome: "Taglio Uomo", durata: 60, Icon: Scissors },
  { id: "2", nome: "Taglio Donna", durata: 60, Icon: Scissors },
  { id: "3", nome: "Eraser", durata: 60, Icon: Eraser },
  { id: "4", nome: "Cut", durata: 60, Icon: Scissors },
  { id: "5", nome: "Palette", durata: 60, Icon: SwatchBook },
  { id: "6", nome: "Brush", durata: 60, Icon: Brush },
  { id: "7", nome: "Eraser 2", durata: 60, Icon: Eraser },
  { id: "8", nome: "Cut 2", durata: 60, Icon: Scissors },
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
