import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../models/pedido.model";

export interface ConfirmOrderDataDto {
  success: boolean;
  message: string;
  data: {
    pedido: Pedido;
  };
}

export type ConfirmOrderResponseDto = ApiResponseDto<ConfirmOrderDataDto>;