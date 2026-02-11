import { ApiResponseDto } from "../../../../types/api-response.dto";
import { ProductoPedidoItem } from "../../models/pedido.model";

export interface UpdateCartProductDataDto {
  mensaje: string;
  productoPedido?: ProductoPedidoItem;
}

export type UpdateCartProductResponseDto = ApiResponseDto<UpdateCartProductDataDto>;