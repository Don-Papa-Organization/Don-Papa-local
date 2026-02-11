import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido, ProductoPedidoItem } from "../../models/pedido.model";

export interface CreateCustomerOrderDataDto {
  pedido: Pedido & { tipoPedido: string };
  productos: ProductoPedidoItem[];
  rutaPDF: string;
}

export type CreateCustomerOrderResponseDto = ApiResponseDto<CreateCustomerOrderDataDto>;