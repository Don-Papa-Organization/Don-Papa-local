import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-tabla',
  standalone: false,
  templateUrl: './ui-tabla.html',
  styleUrls: ['./ui-tabla.scss']
})
export class UiTabla {
  @Input() theadData: string[] = [
    "columna1",
    "columna2",
    "columna3",
    "columna4",
    "columna5",
    "columna6",
    "columna7"
  ];

  @Input() tbodyData: Array<any> = [
    {
      "columna1": "valor1",
      "columna2": "valor2",
      "columna3": "valor3",
      "columna4": "valor4",
      "columna5": "valor5",
      "columna6": "valor6",
      "columna7": "valor7",
    },
    {
      "columna1": "valor1",
      "columna2": "valor2",
      "columna3": "valor3",
      "columna4": "valor4",
      "columna5": "valor5",
      "columna6": "valor6",
      "columna7": "valor7",
    },
    {
      "columna1": "valor1",
      "columna2": "valor2",
      "columna3": "valor3",
      "columna4": "valor4",
      "columna5": "valor5",
      "columna6": "valor6",
      "columna7": "valor7",
    },
    {
      "columna1": "valor1",
      "columna2": "valor2",
      "columna3": "valor3",
      "columna4": "valor4",
      "columna5": "valor5",
      "columna6": "valor6",
      "columna7": "valor7",
    },
  ];

  @Output() editarRegistro = new EventEmitter<any>();
  @Output() eliminarRegistro = new EventEmitter<any>();

  onEditar(fila: any): void {
    this.editarRegistro.emit(fila);
  }

  onEliminar(fila: any): void {
    this.eliminarRegistro.emit(fila);
  }
}
