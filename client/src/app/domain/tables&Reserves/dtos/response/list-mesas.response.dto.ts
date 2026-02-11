import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Mesa } from "../../models/mesa.model";

export interface ListMesasDataDto {
  mensaje?: string;
  mesas: Mesa[];
  total: number;
}

export type ListMesasResponseDto = ApiResponseDto<ListMesasDataDto>;