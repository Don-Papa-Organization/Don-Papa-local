import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  menuItems = [
    { texto: 'Inventario', urlIcono: 'icons/iconoInventario.svg', link: '/inventario' },
    { texto: 'Empleados', urlIcono: 'icons/iconoEmpleados.svg', link: '/empleados' },
    { texto: 'Reportes', urlIcono: 'icons/iconoReportes.svg', link: '/reportes' },
    { texto: 'Promociones', urlIcono: 'icons/iconoPromociones.svg', link: '/promociones' },
    { texto: 'Usuarios', urlIcono: 'icons/iconoUsuarios.svg', link: '/usuarios' },
    { texto: 'Bitacora', urlIcono: 'icons/iconoBitacora.svg', link: '/monitoreo' },
    { texto: 'Estadisticas', urlIcono: 'icons/iconoEstadisticas.svg', link: '/historial' }
  ];

}
