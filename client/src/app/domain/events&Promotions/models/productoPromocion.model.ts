import { Producto } from "../../inventory/models/producto.model";
import { Promocion } from "./promocion.model";

export interface ProductoPromocionItem {
    idProductoPromocion: number;
    precioPromocional?: number;
    porcentajeDescuento?: number;
    cantidadMinima: number;
    idProducto: number;
    idPromocion: number;
    detalleProducto?: Producto;
    detallePromocion?: Promocion;
}

export interface ProductosPromocionResponse {
    idPromocion: number;
    totalProductos: number;
    productos: ProductoPromocionItem[];
}

export interface ProductosPromocionEnriquecidosResponse {
    promocion: Promocion;
    productos: ProductoPromocionItem[];
    totalProductos: number;
}


