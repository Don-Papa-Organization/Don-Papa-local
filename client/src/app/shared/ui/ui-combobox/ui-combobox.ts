import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-combobox',
  standalone: false,
  templateUrl: './ui-combobox.html',
  styleUrl: './ui-combobox.scss'
})
export class UiCombobox {
  @Input() tituloInput: string = 'Selecciona una opción';
  @Input() options: Array<{ value: any, label: string }> = [];
  @Input() isDisabled: boolean = false;
  @Input() selectedOption: any;

  ngOnChanges(changes: any): void {
    console.log('UiCombobox changes:', changes);
    if (changes.options) {
      console.log('Nuevas opciones recibidas:', this.options);
    }
  }

  @Output() selectedOptionChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();

  onSelectChange(value: any): void {
    this.selectedOption = value;
    this.selectedOptionChange.emit(value);
    this.selectionChange.emit(value);
  }
}
