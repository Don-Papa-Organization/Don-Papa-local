import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CreateProductRequestDto } from '../../../../../domain/inventory/dtos/request/create-product.request.dto';
import { InventoryApi } from '../../../../../services/apis/inventory.api';
import { UiImageUpload } from '../../../../../shared/ui/ui-image-upload/ui-image-upload';

@Component({
  selector: 'app-agregar-form',
  standalone: false,
  templateUrl: './agregar-form.html',
  styleUrl: './agregar-form.scss'
})
export class AgregarForm {
  @Input() mostrar: boolean = false;
  @Input() categoriasOptions: Array<{ value: any, label: string }> = [];
  @Input() showTextStyle: boolean = true;

  @Output() cerrar = new EventEmitter<void>();
  @Output() productoCreado = new EventEmitter<void>();

  /** Referencia al componente de imagen para poder llamar uploadImage() después de crear el producto */
  @ViewChild(UiImageUpload) imageUpload?: UiImageUpload;

  productoNuevo: CreateProductRequestDto = {
    nombre: '',
    precio: 0,
    stockActual: 0,
    stockMinimo: 0,
    activo: true,
    descripcion: '',
    idCategoria: 0
  };

  /** Archivo seleccionado por el usuario antes de que el producto sea creado */
  imagenPendiente: File | null = null;

  constructor(private inventoryApi: InventoryApi) { }

  onCerrar(): void {
    this.imagenPendiente = null;
    this.cerrar.emit();
  }

  /** Captura el archivo emitido por ui-image-upload (sin ID de producto aún) */
  onArchivoSeleccionado(file: File): void {
    this.imagenPendiente = file;
  }

  crearProducto(): void {
    const dto: any = {
      nombre: this.productoNuevo.nombre,
      precio: Number(this.productoNuevo.precio),
      stockActual: Number(this.productoNuevo.stockActual),
      stockMinimo: Number(this.productoNuevo.stockMinimo),
      activo: true,
      descripcion: this.productoNuevo.descripcion,
      idCategoria: Number(this.productoNuevo.idCategoria) == 0 ? undefined : Number(this.productoNuevo.idCategoria)
    };

    this.inventoryApi.createProduct(dto).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const nuevoId = response.data.idProducto;

          // Si hay imagen pendiente, subirla ahora que tenemos el ID
          if (this.imagenPendiente && nuevoId) {
            this.inventoryApi.uploadProductImage(nuevoId, this.imagenPendiente).subscribe({
              next: () => {
                this.imagenPendiente = null;
                this.productoCreado.emit();
                this.resetForm();
                this.onCerrar();
              },
              error: (err) => {
                console.error('Producto creado pero error al subir imagen:', err);
                // Emitir de todas formas para que la tabla se recargue
                this.imagenPendiente = null;
                this.productoCreado.emit();
                this.resetForm();
                this.onCerrar();
              }
            });
          } else {
            this.productoCreado.emit();
            this.resetForm();
            this.onCerrar();
          }
        }
      },
      error: (error) => {
        console.error('Error al crear producto:', error);
      }
    });
  }

  private resetForm(): void {
    this.productoNuevo = {
      nombre: '',
      precio: 0,
      stockActual: 0,
      stockMinimo: 0,
      activo: true,
      descripcion: '',
      idCategoria: 0
    };
    this.imagenPendiente = null;
  }
}
