export type MesaTipo = 'VIP' | 'Regular';
export type MesaEstado = 'Disponible' | 'Reservada' | 'Ocupada' | 'Fuera de servicio';

export interface Mesa {
    idMesa: number;
    numero: number;
    tipo: MesaTipo;
    estado: MesaEstado;
}