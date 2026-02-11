import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../../orders/models/pedido.model";
import { Pago } from "../../../orders/models/pago.model";

export interface SaleDetailDataDto {
  pedido: Pedido;
  pago: Pago | null;
}

export type SaleDetailResponseDto = ApiResponseDto<SaleDetailDataDto>;