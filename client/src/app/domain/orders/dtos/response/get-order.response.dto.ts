import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido, ProductoPedidoItem } from "../../models/pedido.model";

export interface GetOrderDataDto {
  pedido: Pedido;
  productos: ProductoPedidoItem[];
}

export type GetOrderResponseDto = ApiResponseDto<GetOrderDataDto>;