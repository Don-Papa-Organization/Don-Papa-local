import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Bitacora } from "../../models/bitacora.model";

export interface BitacoraSearchDataDto {
  total: number;
  registros: Bitacora[];
}

export type BitacoraSearchResponseDto = ApiResponseDto<BitacoraSearchDataDto>;