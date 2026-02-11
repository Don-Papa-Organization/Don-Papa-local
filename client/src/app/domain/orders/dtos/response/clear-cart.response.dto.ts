import { ApiResponseDto } from "../../../../types/api-response.dto";

export interface ClearCartDataDto {
  mensaje: string;
}

export type ClearCartResponseDto = ApiResponseDto<ClearCartDataDto>;