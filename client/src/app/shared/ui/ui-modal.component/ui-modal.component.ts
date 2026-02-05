import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  standalone: false,
  templateUrl: './ui-modal.component.html',
  styleUrl: './ui-modal.component.scss'
})
export class UiModalComponent {
  @Input() titulo: string = '';
  @Input() mostrar: boolean = false;


  @Output() cerrar = new EventEmitter<void>();


  onCerrar() {
    this.cerrar.emit();
  }
}