import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../models/pedido.model";
import { ProductoPedidoItem } from "../../models/pedido.model";

export interface CartPedidoDto extends Pedido {
  cantidadProductos: number;
}

export interface CartProductoPedidoDto extends ProductoPedidoItem {
  idPedido: number;
}

export interface AddProductToCartDataDto {
  success: boolean;
  message: string;
  data: {
    pedido: CartPedidoDto;
    productoPedido: CartProductoPedidoDto;
  };
}

export type AddProductToCartResponseDto = ApiResponseDto<AddProductToCartDataDto>;