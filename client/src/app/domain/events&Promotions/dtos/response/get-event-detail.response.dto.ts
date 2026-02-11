import { ApiResponseDto } from "../../../../types/api-response.dto";
import { Promocion } from "../../models/promocion.model";

export interface EventoDetalleHorarioDto {
  idEventoSemana: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  promociones: Promocion[];
}

export interface EventoDetalleDto {
  idEvento: number;
  nombre: string;
  descripcion: string;
  horarios: EventoDetalleHorarioDto[];
  precio: number | null;
  restricciones: string | null;
}

export type GetEventDetailResponseDto = ApiResponseDto<EventoDetalleDto>;