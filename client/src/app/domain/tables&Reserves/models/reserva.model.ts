import { Mesa } from "./mesa.model";

export type EstadoReserva = 'pendiente' | 'confirmada' | 'cancelada';

export interface Reserva {
  idReserva: number;
  estado: EstadoReserva;
  fechaReserva: string;
  idMesa: number;
  idCliente: number;
  cantidadPersonas: number;
  mesa?: Mesa;
}