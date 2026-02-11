export interface SalesHistoryRequestDto {
  fechaInicio?: string;
  fechaFin?: string;
  estado?: 'sin_confirmar' | 'pendiente' | 'entregado' | 'cancelado';
  canalVenta?: 'web' | 'fisico';
  idUsuario?: number;
  formato?: 'pdf' | 'excel' | 'csv';
}