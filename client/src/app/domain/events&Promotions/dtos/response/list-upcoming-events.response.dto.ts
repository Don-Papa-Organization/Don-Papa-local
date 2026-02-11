import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Promocion } from "../../models/promocion.model";

export interface UpcomingEventoDto {
  idEventoSemana: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  evento: {
    idEvento: number;
    nombre: string;
    descripcion: string;
  } | null;
  promociones: Promocion[];
}

export type ListUpcomingEventsResponseDto = ApiResponseDto<UpcomingEventoDto[]>;