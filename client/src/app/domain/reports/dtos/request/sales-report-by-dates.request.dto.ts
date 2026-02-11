export interface SalesReportByDatesRequestDto {
  fechaInicio: string;
  fechaFin: string;
  canalVenta?: 'web' | 'fisico';
  idUsuario?: number;
  formato?: 'pdf' | 'excel' | 'csv';
}