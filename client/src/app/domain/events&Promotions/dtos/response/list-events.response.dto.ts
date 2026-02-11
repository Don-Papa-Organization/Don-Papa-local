import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Evento } from "../../models/evento.model";

export type ListEventsResponseDto = ApiResponseDto<Evento[]>;