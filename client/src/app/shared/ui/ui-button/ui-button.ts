import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ui-button',
  standalone: false,
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss'
})
export class UiButton {
     @Input() texto!: string;             // Recibe el texto del botón
     @Output() accion = new EventEmitter<void>();
}
