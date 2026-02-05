import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-input',
  standalone: false,
  templateUrl: './ui-input.html',
  styleUrl: './ui-input.scss'
})
export class UiInput {
  @Input() valorInput: string = '';
  @Input() tituloInput: string = '';
  @Input() placeholder: string = '';
}
