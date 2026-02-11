import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../models/pedido.model";

export interface UpdateOrderStatusDataDto extends Pedido {
  estadoActual: string;
}

export type UpdateOrderStatusResponseDto = ApiResponseDto<UpdateOrderStatusDataDto>;