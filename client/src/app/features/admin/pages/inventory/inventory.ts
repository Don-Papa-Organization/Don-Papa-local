import { Component, OnInit } from '@angular/core';
import { InventoryApi } from '../../../../services/apis/inventory.api';
import { Producto } from '../../../../domain/inventory/models/producto.model';
import { forkJoin, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss'
})
export class Inventory implements OnInit {
  productosTableData: Array<Record<string, any>> = [];
  columnas: string[] = ['idProducto', 'nombre', 'precio', 'stockActual', 'stockMinimo', 'activo', 'descripcion', 'categoria', 'imagen', 'Acciones'];

  constructor(private inventoryApi: InventoryApi) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  

  private cargarProductos(): void {
    this.inventoryApi.listProducts().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const productos = response.data.productos;
          
          // Crear observables para cada producto (para obtener el nombre de la categoría)
          const productosConCategoria$ = productos.map(producto =>
            producto.idCategoria
              ? this.inventoryApi.getCategory(producto.idCategoria).pipe(
                  map(catResponse => ({
                    ...producto,
                    nombreCategoria: catResponse.data?.nombre || 'N/A'
                  })),
                  switchMap(p => of(p))
                )
              : of({ ...producto, nombreCategoria: 'N/A' })
          );

          // Usar forkJoin para esperar todas las solicitudes
          if (productosConCategoria$.length > 0) {
            forkJoin(productosConCategoria$).subscribe({
              next: (productosConCat) => {
                this.productosTableData = productosConCat.map(producto => ({
                  idProducto: producto.idProducto,
                  nombre: producto.nombre,
                  precio: producto.precio,
                  stockActual: producto.stockActual,
                  stockMinimo: producto.stockMinimo,
                  activo: producto.activo ? 'Sí' : 'No',
                  descripcion: producto.descripcion || 'N/A',
                  categoria: producto.nombreCategoria,
                  imagen: this.inventoryApi.resolveImageUrl(
                    producto.urlImagen && producto.urlImagen.startsWith("/images")
                      ? this.inventoryApi.getProductImageUrl(producto.idProducto)
                      : (producto.urlImagen || this.inventoryApi.getProductImageUrl(producto.idProducto))
                  )
                }));
                console.log(this.productosTableData);
              }
            });
          }
        }
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    });
  }
}


