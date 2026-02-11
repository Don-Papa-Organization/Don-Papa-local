import { ApiResponseDto } from "../../../../types/api-response.dto";

export interface ReservationStatusDataDto {
  idReserva: number;
  estado: string;
  fecha: string;
  hora: string;
  numeroMesa: number | string;
  tipoMesa: string;
  cantidadPersonas: number;
  horaEstimadaUso: string;
}

export type ReservationStatusResponseDto = ApiResponseDto<ReservationStatusDataDto>;