import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-icon-button',
  standalone: false,
  templateUrl: './ui-icon-button.html',
  styleUrl: './ui-icon-button.scss'
})

export class UiIconButton {
  @Input() texto = "";
  @Input() urlIcono = "";
  @Input() link = "";

  @Input() sidebarStyles: boolean = false;
  @Input() customClass: string = "link";
  @Input() fullWidth: boolean = false;
  @Input() showBorder: boolean = false;
  @Input() customHeight: string = "auto";

}
