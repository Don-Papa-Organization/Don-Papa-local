import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Bitacora } from "../../models/bitacora.model";

export interface BitacoraByEmployeeDataDto {
  total: number;
  registros: Bitacora[];
}

export type BitacoraByEmployeeResponseDto = ApiResponseDto<BitacoraByEmployeeDataDto>;