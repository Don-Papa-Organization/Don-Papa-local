export interface Producto {
    idProducto: number;
    nombre: string;
    precio: number;
    stockActual: number;
    stockMinimo: number;
    activo: boolean;
    descripcion?: string | null;
    urlImagen?: string;
    idCategoria?: number;
}