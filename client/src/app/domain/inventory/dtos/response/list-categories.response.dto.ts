import { ApiResponseDto } from "../../../../types/api-response.dto";
import { CategoriaProducto } from "../../models/categoriaProducto.model";

export type ListCategoriesResponseDto = ApiResponseDto<CategoriaProducto[]>;