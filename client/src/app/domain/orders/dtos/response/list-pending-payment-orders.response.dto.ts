import { PaginationMetaDto } from "../../../../types/pagination-meta.dto";

export interface PendingPaymentOrderDto {
  idPedido: number;
  idUsuario: number;
  total: number;
  estado: string;
  canalVenta: string;
  fechaPedido: string;
  direccionEntrega?: string;
}

export interface ListPendingPaymentOrdersResponseDto {
  success: boolean;
  message: string;
  data: PendingPaymentOrderDto[];
  pagination: PaginationMetaDto;
  timestamp: string;
}