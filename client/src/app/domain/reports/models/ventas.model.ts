import { Pedido } from "../../orders/models/pedido.model";
import { Pago } from "../../orders/models/pago.model";


export interface PedidoDetail{
    pedido: Pedido;
    pago: Pago | null;
}

export interface ReporteVentas {
    ventas: Pedido[];
    totalVentas: number;
    montoTotal: number;
    promedioVenta: number;
    ventasPorEstado: Record<string, number>;
    ventasPorCanalVenta: Record<string, number>;
    periodo: {
        inicio: string;
        fin: string;
    };
}

export interface Sale {
    total: number;
    ventas: Pedido[];
}
