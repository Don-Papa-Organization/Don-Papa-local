import { ApiResponseDto } from "../../../../types/api-response.dto";
import { MetodoPago } from "../../models/pago.model";

export type CreatePaymentMethodResponseDto = ApiResponseDto<MetodoPago>;