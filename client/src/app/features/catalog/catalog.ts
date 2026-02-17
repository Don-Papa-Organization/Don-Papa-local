import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryApi } from '../../services/apis/inventory.api';
import { Producto } from '../../domain/inventory/models/producto.model';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog implements OnInit {
  direccion: string = "https://maps.app.goo.gl/Q1G4Ej7qaxHd3hVu5"
  opacidad: number = 0
  noBackgroundColor: boolean = true
  backgroundColorExep: boolean = true
  borderRadius: string = "16px"
  icono: boolean = true;

  productos: Producto[] = [];
  loading = false;
  error = '';

  constructor(private router: Router, private inventoryApi: InventoryApi){}

  ngOnInit(): void {
    this.loadCatalog();
  }

  irARegistro(): void{
    this.router.navigate(['/auth/register'])
  }

  irALogin(): void{
    this.router.navigate(['/auth/login'])
  }

  irADireccion(): void {
    window.open(this.direccion, '_blank', 'noopener,noreferrer');
  }

  resolveImagen(producto: Producto): string {
    return this.inventoryApi.getProductImageUrl(producto.idProducto);
  }

  private loadCatalog(): void {
    this.loading = true;
    this.error = '';

    this.inventoryApi.listCatalog().subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          this.error = res.message || 'No se pudo cargar el catálogo.';
          this.productos = [];
          this.loading = false;
          return;
        }

        this.productos = res.data.productos || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || 'Error al cargar el catálogo.';
        this.productos = [];
        this.loading = false;
      }
    });
  }
}
