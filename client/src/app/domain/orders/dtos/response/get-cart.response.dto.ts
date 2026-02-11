import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido, ProductoPedidoItem } from "../../models/pedido.model";

export interface GetCartDataDto {
  pedido: Pedido;
  productos: ProductoPedidoItem[];
}

export type GetCartResponseDto = ApiResponseDto<GetCartDataDto>;