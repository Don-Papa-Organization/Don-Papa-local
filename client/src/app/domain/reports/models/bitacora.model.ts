export type TipoBitacora = 'REPORTE_INCIDENTE' | 'COMENTARIO_JORNADA' | 'OTRO';

export interface Bitacora {
    idBitacora: number;
    idUsuario: number;
    idEmpleado: number;
    descripcion: string;
    tipo?: TipoBitacora;
    fecha?: string;
    horaInicio?: string;
    horaFin?: string;
}