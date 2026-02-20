import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UpdateProductRequestDto } from '../../../../../domain/inventory/dtos/request/update-product.request.dto';
import { InventoryApi } from '../../../../../services/apis/inventory.api';

@Component({
  selector: 'app-editar-form',
  standalone: false,
  templateUrl: './editar-form.html',
  styleUrl: './editar-form.scss'
})
export class EditarForm implements OnChanges {
  @Input() mostrar: boolean = false;
  @Input() categoriasOptions: Array<{ value: any, label: string }> = [];
  @Input() showTextStyle: boolean = true;
  @Input() producto: any;

  @Output() cerrar = new EventEmitter<void>();
  @Output() productoActualizado = new EventEmitter<void>();

  productoEditado: UpdateProductRequestDto = {
    nombre: '',
    precio: 0,
    stockActual: 0,
    stockMinimo: 0,
    descripcion: '',
    idCategoria: 0
  };

  constructor(private inventoryApi: InventoryApi) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.productoEditado = {
        nombre: this.producto.nombre || '',
        precio: this.producto.precio || 0,
        stockActual: this.producto.stockActual || 0,
        stockMinimo: this.producto.stockMinimo || 0,
        descripcion: this.producto.descripcion === 'N/A' ? '' : this.producto.descripcion || '',
        idCategoria: this.producto.idCategoria || 0
      };
    }
  }

  onCerrar(): void {
    this.cerrar.emit();
  }

  onProductoActualizado(): void {
    this.productoActualizado.emit();
  }

  actualizarProducto(): void {
    if (this.producto && this.producto.idProducto) {
      const dto: any = {
        nombre: this.productoEditado.nombre,
        precio: Number(this.productoEditado.precio),
        stockActual: Number(this.productoEditado.stockActual),
        stockMinimo: Number(this.productoEditado.stockMinimo),
        descripcion: this.productoEditado.descripcion || null,
        idCategoria: Number(this.productoEditado.idCategoria)
      };

      this.inventoryApi.updateProduct(this.producto.idProducto, dto).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Producto actualizado exitosamente');
            this.productoActualizado.emit();
            this.onCerrar();
          }
        },
        error: (error) => {
          console.error('Error al actualizar producto:', error);
        }
      });
    }
  }
}
