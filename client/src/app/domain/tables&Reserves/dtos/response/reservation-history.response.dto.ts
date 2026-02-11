import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Reserva } from "../../models/reserva.model";

export interface ReservationHistoryItemDto extends Reserva {
  numeroMesa?: number | string;
  tipoMesa?: string;
}

export interface ReservationHistoryDataDto {
  mensaje?: string;
  reservas: ReservationHistoryItemDto[];
  total: number;
}

export type ReservationHistoryResponseDto = ApiResponseDto<ReservationHistoryDataDto>;