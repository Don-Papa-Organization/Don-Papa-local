export interface PaymentHistoryRequestDto {
  page?: number;
  limit?: number;
  fechaInicio?: string;
  fechaFin?: string;
  idMetodoPago?: number;
  estado?: string;
}