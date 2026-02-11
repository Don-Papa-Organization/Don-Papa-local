import { PaginationMetaDto } from "../../../../types/pagination-meta.dto";
import { Pedido } from "../../models/pedido.model";

export interface ListOrdersInProgressResponseDto {
  success: boolean;
  data: Pedido[];
  message: string;
  timestamp: string;
  pagination: PaginationMetaDto;
}