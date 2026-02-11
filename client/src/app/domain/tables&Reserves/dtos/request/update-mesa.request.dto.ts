export interface UpdateMesaRequestDto {
  numero?: number;
  tipo?: 'VIP' | 'Regular';
  estado?: 'Disponible' | 'Reservada' | 'Ocupada' | 'Fuera de servicio';
}