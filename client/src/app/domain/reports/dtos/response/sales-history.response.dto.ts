import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../../orders/models/pedido.model";

export interface SalesHistoryDataDto {
  total: number;
  ventas: Pedido[];
}

export type SalesHistoryResponseDto = ApiResponseDto<SalesHistoryDataDto>;