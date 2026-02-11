import { ApiResponseDto } from "../../../../types/api-response.dto";
import { ProductoPromocionItem } from "../../models/productoPromocion.model";

export type ListProductsPromoResponseDto = ApiResponseDto<ProductoPromocionItem[]>;