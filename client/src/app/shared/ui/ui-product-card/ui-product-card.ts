import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-product-card',
  standalone: false,
  templateUrl: './ui-product-card.html',
  styleUrl: './ui-product-card.scss'
})
export class UiProductCard {
  @Input() urlImagen: string = "/img/default_product.png"
  @Input() precio: number = 0
  @Input() nombre: string = "nombre"
  @Input() stockActual: number = 0
  @Input() link: string = ""
}
