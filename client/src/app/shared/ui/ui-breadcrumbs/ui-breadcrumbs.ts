import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouteI } from '../../interfaces/routeI';

@Component({
  selector: 'ui-breadcrumbs',
  standalone: false,
  templateUrl: './ui-breadcrumbs.html',
  styleUrl: './ui-breadcrumbs.scss'
})
export class UiBreadcrumbsComponent {
  @Input() rutas: RouteI[] = [];

  constructor(private router: Router) { }
  
  onClick(route: RouteI, index: number) {
    if (index === this.rutas.length - 1) return;
    if (route.ruta) {
      this.router.navigate([route.ruta]);
    }
    console.log(route)
  }
}
