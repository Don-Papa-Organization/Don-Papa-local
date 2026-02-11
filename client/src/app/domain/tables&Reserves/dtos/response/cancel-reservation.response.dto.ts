import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Reserva } from "../../models/reserva.model";

export type CancelReservationResponseDto = ApiResponseDto<Reserva>;