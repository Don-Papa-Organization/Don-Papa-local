import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() icono: boolean = false;
  @Input() titulo: string = "Don Papa Licores";
  @Input() opacidad: number = 1
}
