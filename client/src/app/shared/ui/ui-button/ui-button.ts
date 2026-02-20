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
  @Input() backgroundColor: string = "#D4AF37";
  
  // Getter para determinar si se usa un color personalizado
  get hasCustomColor(): boolean {
    return this.backgroundColor !== "#D4AF37";
  }
  
  // Getter para determinar el color del borde
  get borderColor(): string {
    return this.noBackgroundColor ? this.backgroundColor : 'none';
  }
  
  // Getter para determinar el color de fondo actual
  get currentBackgroundColor(): string {
    return this.noBackgroundColor ? 'transparent' : this.backgroundColor;
  }
}
