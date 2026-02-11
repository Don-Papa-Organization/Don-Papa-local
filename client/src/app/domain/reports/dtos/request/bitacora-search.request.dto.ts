export interface BitacoraSearchRequestDto {
  tipo?: 'REPORTE_INCIDENTE' | 'COMENTARIO_JORNADA' | 'OTRO';
  fechaInicio?: string;
  fechaFin?: string;
}