import { PaginationMetaDto } from "../../../../types/pagination-meta.dto";
import { Pedido } from "../../models/pedido.model";

export interface OrderHistoryItemDto extends Pedido {
  cantidadProductos: number;
}

export interface ListOrderHistoryResponseDto {
  success: boolean;
  data: OrderHistoryItemDto[];
  message: string;
  timestamp: string;
  pagination: PaginationMetaDto;
}