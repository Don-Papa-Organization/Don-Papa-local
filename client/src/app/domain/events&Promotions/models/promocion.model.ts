export type TipoPromocion = 'porcentaje' | 'precio_fijo';

export interface Promocion {
    idPromocion: number;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    tipoPromocion: TipoPromocion;
    activo: boolean;
}


