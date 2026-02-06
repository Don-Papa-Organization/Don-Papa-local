import { Component } from '@angular/core';
import { MenuItem } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  menuItems: MenuItem[] = [
    { texto: 'Inventario', urlIcono: 'icons/iconoInventario.svg', link: '/inventario' },
    { texto: 'Empleados', urlIcono: 'icons/iconoEmpleados.svg', link: '/empleados' },
    { texto: 'Reportes', urlIcono: 'icons/iconoReportes.svg', link: '/reportes' },
    { texto: 'Promociones', urlIcono: 'icons/iconoPromociones.svg', link: '/promociones' },
    { texto: 'Usuarios', urlIcono: 'icons/iconoUsuarios.svg', link: '/usuarios' },
    { texto: 'Bitacora', urlIcono: 'icons/iconoBitacora.svg', link: '/monitoreo' },
    { texto: 'Estadisticas', urlIcono: 'icons/iconoEstadisticas.svg', link: '/historial' }
  ];
}
