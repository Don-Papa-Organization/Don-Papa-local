import { ApiResponseDto } from "../../../../types/api-response.dto";

export interface RemoveCartProductDataDto {
  mensaje: string;
}

export type RemoveCartProductResponseDto = ApiResponseDto<RemoveCartProductDataDto>;