import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button-grid',
  standalone: false,
  templateUrl: './ui-button-grid.html',
  styleUrls: ['./ui-button-grid.scss']
})
export class UiButtonGridComponent {

  @Input() accion!: () => void;
  @Input() icono: string = '';
  @Input() texto: string = '';

  ejecutar() {
    if (this.accion) this.accion();
  }

}
