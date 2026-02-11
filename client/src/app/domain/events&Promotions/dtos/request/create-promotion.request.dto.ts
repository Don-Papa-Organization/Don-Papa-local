import { TipoPromocion } from "../../models/promocion.model";

export interface CreatePromotionRequestDto {
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  tipoPromocion: TipoPromocion;
}