import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Producto } from "../../models/producto.model";

export interface CatalogoProductosDataDto {
  productos: Producto[];
  total: number;
  pagina: number;
  totalPaginas: number;
}

export type ListCatalogResponseDto = ApiResponseDto<CatalogoProductosDataDto>;