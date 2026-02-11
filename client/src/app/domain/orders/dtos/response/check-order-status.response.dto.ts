import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Pedido } from "../../models/pedido.model";

export type CheckOrderStatusResponseDto = ApiResponseDto<Pedido>;