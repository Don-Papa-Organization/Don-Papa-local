import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Mesa } from "../../models/mesa.model";

export interface ListMesasByEstadoDataDto {
  mensaje?: string;
  mesas: Mesa[];
  total: number;
}

export type ListMesasByEstadoResponseDto = ApiResponseDto<ListMesasByEstadoDataDto>;