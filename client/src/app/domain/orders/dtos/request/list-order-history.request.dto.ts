export interface ListOrderHistoryRequestDto {
  page?: number;
  limit?: number;
  fechaInicio?: string;
  fechaFin?: string;
  estado?: 'pendiente' | 'entregado' | 'cancelado';
}