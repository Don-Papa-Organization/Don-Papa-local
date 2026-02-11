import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Producto } from "../../models/producto.model";

export type CreateProductResponseDto = ApiResponseDto<Producto>;