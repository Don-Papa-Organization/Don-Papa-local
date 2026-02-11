export interface ListProductsRequestDto {
  nombre?: string;
  categoria?: number;
  activo?: boolean;
  esPromocion?: boolean;
  precioMin?: number;
  precioMax?: number;
  page?: number;
  limit?: number;
  ordenarPor?: 'nombre' | 'precio' | 'reciente' | 'stock';
  orden?: 'asc' | 'desc';
}