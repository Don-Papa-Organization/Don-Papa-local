export interface UpdateMesaEstadoRequestDto {
  estado: 'Disponible' | 'Reservada' | 'Ocupada' | 'Fuera de servicio';
}