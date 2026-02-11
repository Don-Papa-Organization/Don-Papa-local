import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido, ProductoPedidoItem } from "../../models/pedido.model";

export interface CustomerOrderDetailDataDto extends Pedido {
  productos: ProductoPedidoItem[];
}

export type GetCustomerOrderDetailResponseDto = ApiResponseDto<CustomerOrderDetailDataDto>;