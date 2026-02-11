import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido, ProductoPedidoItem } from "../../models/pedido.model";

export interface AddProductToOrderDataDto {
  pedido: Pedido & { cantidadProductos: number };
  productoPedido: ProductoPedidoItem;
}

export type AddProductToOrderResponseDto = ApiResponseDto<AddProductToOrderDataDto>;