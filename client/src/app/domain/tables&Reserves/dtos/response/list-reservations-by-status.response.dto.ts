import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Reserva } from "../../models/reserva.model";

export interface ReservationStatusListItemDto extends Reserva {
  fecha?: string;
  hora?: string;
  numeroMesa?: number | string;
  tipoMesa?: string;
}

export interface ListReservationsByStatusDataDto {
  mensaje?: string;
  estado: string;
  reservas: ReservationStatusListItemDto[];
  total: number;
}

export type ListReservationsByStatusResponseDto = ApiResponseDto<ListReservationsByStatusDataDto>;