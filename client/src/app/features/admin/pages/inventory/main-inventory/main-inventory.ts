import { Component, OnInit } from '@angular/core';
import { InventoryApi } from '../../../../../services/apis/inventory.api';
import { Producto } from '../../../../../domain/inventory/models/producto.model';
import { forkJoin, of, timer } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';
import { CreateProductRequestDto } from '../../../../../domain/inventory/dtos/request/create-product.request.dto';
import { UpdateProductRequestDto } from '../../../../../domain/inventory/dtos/request/update-product.request.dto';

@Component({
  selector: 'app-main-inventory',
  standalone: false,
  templateUrl: './main-inventory.html',
  styleUrl: './main-inventory.scss'
})
export class MainInventory implements OnInit {
  noBackgroundColor: boolean = true;

  productosTableData: Array<Record<string, any>> = [];
  columnas: string[] = ['idProducto', 'nombre', 'precio', 'stockActual', 'stockMinimo', 'activo', 'descripcion', 'categoria', 'imagen', 'Acciones'];

  urlsIconos: string[] = ["icons/agregar.svg", "icons/editar.svg"];
  showTextStyle: boolean = true;

  mostrarModalEditar: boolean = false;
  mostrarModalEliminar: boolean = false;
  mostrarModalAgregar: boolean = false;
  registroSeleccionado: any = null;

  mostrarModalAgregarCategoria: boolean = false;
  mostrarModalEditarCategoria: boolean = false;
  nuevaCategoriaNombre: string = '';
  categoriaSeleccionadaId: any = null;
  categoriaNombreEditado: string = '';








  categoriasOptions: Array<{ value: any, label: string }> = [];

  constructor(private inventoryApi: InventoryApi) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarCategorias();
  }

  onAgregar(): void {
    this.mostrarModalAgregar = true;
  }

  onEditar(registro: any): void {
    this.registroSeleccionado = registro;
    this.mostrarModalEditar = true;
  }

  onProductoActualizado(): void {
    // Refresh immediately and then every second for 3 more times to ensure image updates propagate
    timer(0, 1000).pipe(take(0)).subscribe(() => {
      this.cargarProductos();
    });
    // this.cerrarModalEditar(); // Removed to keep modal open on image update
  }

  actualizarProducto(): void {
    // Logic moved to EditarForm
  }

  onEliminar(registro: any): void {
    this.registroSeleccionado = registro;
    this.mostrarModalEliminar = true;
  }

  cerrarModalEditar(): void {
    this.mostrarModalEditar = false;
    this.registroSeleccionado = null;
  }

  cerrarModalEliminar(): void {
    this.mostrarModalEliminar = false;
    this.registroSeleccionado = null;
  }

  cerrarModalAgregar(): void {
    this.mostrarModalAgregar = false;
  }

  onProductoCreado(): void {
    this.cargarProductos();
    this.cerrarModalAgregar();
  }

  crearProducto(): void {
    // Logic moved to AgregarForm
  }

  eliminarProducto(): void {
    if (this.registroSeleccionado && this.registroSeleccionado.idProducto) {
      this.inventoryApi.deleteProduct(this.registroSeleccionado.idProducto).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Producto eliminado exitosamente');
            this.cerrarModalEliminar();
            this.cargarProductos(); // Recargar la lista de productos
          }
        },
        error: (error) => {
          console.error('Error al eliminar producto:', error);
          // Aquí podrías agregar un mensaje de error al usuario
        }
      });
    }
  }

  cargarProductos(): void {
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
                  idCategoria: producto.idCategoria,
                  imagen: this.inventoryApi.resolveImageUrl(
                    producto.urlImagen && producto.urlImagen.startsWith("/images")
                      ? this.inventoryApi.getProductImageUrl(producto.idProducto)
                      : (producto.urlImagen || this.inventoryApi.getProductImageUrl(producto.idProducto))
                  ) + `?t=${new Date().getTime()}`
                })).sort((a, b) => a.idProducto - b.idProducto);

                // Update selected record if exists to reflect changes in the open modal
                if (this.registroSeleccionado) {
                  const updatedRecord = this.productosTableData.find(p => p['idProducto'] === this.registroSeleccionado.idProducto);
                  if (updatedRecord) {
                    this.registroSeleccionado = updatedRecord;
                  }
                }
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

  private cargarCategorias(): void {
    console.log('Cargando categorías...');
    this.inventoryApi.listCategories().subscribe({
      next: (response) => {
        // console.log('Respuesta cruda de categorías (JSON):', JSON.stringify(response));

        // Tentative fix/debug: Check if data is array or object
        const data: any = response.data;
        let categoriesArray: any[] = [];

        if (Array.isArray(data)) {
          categoriesArray = data;
        } else if (data && typeof data === 'object') {
          // Try to find an array property
          const keys = Object.keys(data);
          // console.log('Claves en response.data:', keys);
          // Common patterns
          if (Array.isArray(data.categorias)) {
            categoriesArray = data.categorias;
          } else if (Array.isArray(data.categories)) {
            categoriesArray = data.categories;
          } else if (keys.length > 0 && Array.isArray(data[keys[0]])) {
            // Fallback: assume the first array property is the list
            categoriesArray = data[keys[0]];
          }
        }

        if (categoriesArray.length > 0) {
          this.categoriasOptions = categoriesArray.map((categoria: any) => ({
            value: categoria.idCategoria,
            label: categoria.nombre
          }));
          // console.log('Categorías transformadas:', this.categoriasOptions);
        } else {
          console.warn('No se pudieron encontrar categorías en la respuesta:', response);
        }
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  onAgregarCategoria(): void {
    this.mostrarModalAgregarCategoria = true;
  }

  cerrarModalAgregarCategoria(): void {
    this.mostrarModalAgregarCategoria = false;
    this.nuevaCategoriaNombre = '';
  }

  guardarCategoria(): void {
    if (this.nuevaCategoriaNombre.trim()) {
      const dto = { nombre: this.nuevaCategoriaNombre };
      this.inventoryApi.createCategory(dto as any).subscribe({
        next: (response) => {
          if (response.success) {
            this.cargarCategorias();
            this.cerrarModalAgregarCategoria();
          }
        },
        error: (err) => console.error(err)
      });
    }
  }

  onEditarCategoria(): void {
    this.mostrarModalEditarCategoria = true;
  }

  cerrarModalEditarCategoria(): void {
    this.mostrarModalEditarCategoria = false;
    this.categoriaSeleccionadaId = null;
    this.categoriaNombreEditado = '';
  }

  actualizarCategoria(): void {
    if (this.categoriaSeleccionadaId && this.categoriaNombreEditado.trim()) {
      const dto = { nombre: this.categoriaNombreEditado };
      this.inventoryApi.updateCategory(this.categoriaSeleccionadaId, dto as any).subscribe({
        next: (res) => {
          if (res.success) {
            this.cargarCategorias();
            this.cargarProductos(); // Actualizar tabla de productos
            this.cerrarModalEditarCategoria();
          } else {
            alert('Error al actualizar categoría: ' + (res.message || 'Error desconocido'));
          }
        },
        error: (err) => {
          console.error(err);
          alert('Error al actualizar categoría. Ver consola para más detalles.');
        }
      });
    }
  }

  eliminarCategoria(): void {
    if (this.categoriaSeleccionadaId) {
      if (!confirm('¿Está seguro de que desea eliminar esta categoría?')) return;

      this.inventoryApi.deleteCategory(this.categoriaSeleccionadaId).subscribe({
        next: (res) => {
          if (res.success) {
            this.cargarCategorias();
            this.cerrarModalEditarCategoria();
            alert('Categoría eliminada correctamente');
          } else {
            alert('Error al eliminar categoría: ' + (res.message || 'Error desconocido'));
          }
        },
        error: (err) => {
          console.error(err);
          alert('Error al eliminar categoría. Es posible que tenga productos asociados.');
        }
      });
    }
  }
}


