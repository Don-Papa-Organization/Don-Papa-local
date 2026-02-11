export interface ListMesasByEstadoRequestDto {
  estado: 'Disponible' | 'Reservada' | 'Ocupada' | 'Fuera de servicio';
}