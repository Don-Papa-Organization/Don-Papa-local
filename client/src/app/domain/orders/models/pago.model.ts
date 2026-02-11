import { Pedido } from "./pedido.model";

export interface MetodoPago {
    idMetodoPago: number;
    nombre: string;
}

export interface Pago {
    idPago: number;
    urlComprobante: string;
    monto: number;
    fechaPago: string;
    idPedido: number;
    idMetodoPago: number;
    metodoPago?: MetodoPago;
    pedido?: Pedido;
}