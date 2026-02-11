import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Mesa } from "../../models/mesa.model";

export interface AvailabilityDataDto {
  fecha: string;
  hora: string;
  cantidadPersonas: number;
  mesasDisponibles: Mesa[];
  totalDisponibles: number;
}

export type CheckAvailabilityResponseDto = ApiResponseDto<AvailabilityDataDto>;