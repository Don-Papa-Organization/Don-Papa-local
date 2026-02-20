import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { InventoryApi } from '../../../services/apis/inventory.api';

@Component({
  selector: 'app-ui-image-upload',
  standalone: false,
  templateUrl: './ui-image-upload.html',
  styleUrl: './ui-image-upload.scss'
})
export class UiImageUpload implements OnChanges {
  /** ID del producto al que pertenece la imagen (si se provee, sube automáticamente) */
  @Input() productoId: number | null = null;
  /** URL de la imagen actual para mostrar como preview inicial */
  @Input() urlActual: string | null = null;

  /** Emite cuando la imagen fue subida exitosamente */
  @Output() imagenSubida = new EventEmitter<void>();
  /** Emite el archivo seleccionado (siempre, incluso sin productoId) */
  @Output() archivoSeleccionado = new EventEmitter<File>();

  isDragover = false;
  previewUrl: string | null = null;
  selectedFile: File | null = null;
  subiendo = false;
  errorMsg: string | null = null;

  constructor(private inventoryApi: InventoryApi) { }

  ngOnChanges(changes: SimpleChanges): void {
    // Mostrar imagen existente cuando el modal se abre con un producto cargado
    if (changes['urlActual'] && this.urlActual && !this.selectedFile) {
      this.previewUrl = this.urlActual;
    }
    if (changes['productoId'] && !this.productoId) {
      // Al cerrar/resetear, limpiar estado
      this.previewUrl = this.urlActual ?? null;
      this.selectedFile = null;
      this.errorMsg = null;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragover = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragover = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragover = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      this.errorMsg = 'Solo se permiten archivos de imagen.';
      return;
    }
    this.errorMsg = null;
    this.selectedFile = file;

    // Vista previa inmediata
    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    // Emitir siempre (útil para agregar-form que atrapa el archivo antes del ID)
    this.archivoSeleccionado.emit(file);

    // Si ya se conoce el ID, subir inmediatamente
    if (this.productoId !== null) {
      this.uploadImage(file);
    }
  }

  /** Sube la imagen al backend. Puede llamarse externamente con un ID recién creado. */
  uploadImage(file: File, productoId?: number) {
    const id = productoId ?? this.productoId;
    if (id === null) return;

    this.subiendo = true;
    this.inventoryApi.uploadProductImage(id, file).subscribe({
      next: (response) => {
        this.subiendo = false;
        if (response.success) {
          this.imagenSubida.emit();
        } else {
          this.errorMsg = 'Error al subir la imagen.';
        }
      },
      error: () => {
        this.subiendo = false;
        this.errorMsg = 'No se pudo subir la imagen.';
      }
    });
  }

  removeImage() {
    this.previewUrl = this.urlActual ?? null;
    this.selectedFile = null;
    this.errorMsg = null;
  }
}
