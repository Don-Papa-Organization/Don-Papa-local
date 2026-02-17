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

  @Input() customWidth: string = 'fit-content'; // Ancho del botón, por defecto 'auto'
  @Input() tipo: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() borderRadius: string = "5px"
  @Input() noBackgroundColor: boolean = false;
  @Input() backgroundColorExep: boolean = false
}
