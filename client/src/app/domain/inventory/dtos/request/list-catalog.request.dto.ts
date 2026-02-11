export interface ListCatalogRequestDto {
  categoria?: number;
  precioMin?: number;
  precioMax?: number;
  esPromocion?: boolean;
  page?: number;
  limit?: number;
  ordenarPor?: 'nombre' | 'precio' | 'reciente';
  orden?: 'asc' | 'desc';
}