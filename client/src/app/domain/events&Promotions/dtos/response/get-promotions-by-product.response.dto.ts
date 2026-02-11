import { ApiResponseDto } from "../../../../types/api-response.dto";
import { ProductoPromocionItem } from "../../models/productoPromocion.model";

export interface PromotionsByProductDataDto {
  idProducto: number;
  totalPromociones: number;
  promociones: ProductoPromocionItem[];
}

export type GetPromotionsByProductResponseDto = ApiResponseDto<PromotionsByProductDataDto>;