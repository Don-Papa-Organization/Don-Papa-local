import { TipoPromocion } from "../../models/promocion.model";

export interface UpdatePromotionRequestDto {
  nombre?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  tipoPromocion?: TipoPromocion;
  activo?: boolean;
}