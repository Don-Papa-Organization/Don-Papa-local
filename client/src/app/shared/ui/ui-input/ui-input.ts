  import { Component, Input, Output, EventEmitter } from '@angular/core';

  @Component({
    selector: 'ui-input',
    standalone: false,
    templateUrl: './ui-input.html',
    styleUrl: './ui-input.scss'
  })
  export class UiInput {
    @Input() tituloInput: string = '';
    @Input() placeholder: string = '';
    @Input() tipo: string = 'text';

    @Output() valorInputChange = new EventEmitter<string>();
  }
