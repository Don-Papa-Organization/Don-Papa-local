import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Reserva } from "../../models/reserva.model";

export interface DailyReservationItemDto extends Reserva {
  hora?: string;
  fechaCompleta?: string;
  numeroMesa?: number | string;
  tipoMesa?: string;
}

export interface DailyReservationsDataDto {
  mensaje?: string;
  fecha: string;
  reservas: DailyReservationItemDto[];
  total: number;
}

export type DailyReservationsResponseDto = ApiResponseDto<DailyReservationsDataDto>;