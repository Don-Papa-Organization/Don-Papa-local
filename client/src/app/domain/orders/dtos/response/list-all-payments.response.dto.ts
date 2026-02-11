import { PaginationMetaDto } from "../../../../types/pagination-meta.dto";
import { Pago } from "../../models/pago.model";

export interface ListAllPaymentsResponseDto {
  success: boolean;
  message: string;
  data: Pago[];
  pagination: PaginationMetaDto;
  timestamp: string;
}