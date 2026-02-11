export interface CreateProductPromoRequestDto {
  idPromocion: number;
  idProducto: number;
  cantidadMinima: number;
  precioPromocional?: number;
  porcentajeDescuento?: number;
}