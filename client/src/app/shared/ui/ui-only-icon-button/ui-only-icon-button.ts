import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-only-icon-button',
  standalone: false,
  templateUrl: './ui-only-icon-button.html',
  styleUrl: './ui-only-icon-button.scss'
})
export class UiOnlyIconButton {
  @Input() urlIcono = "";
  @Input() link = "";

  @Output() action = new EventEmitter<void>();

  @Input() sidebarStyles: boolean = false;
  @Input() customClass: string = "icon-button";
  @Input() fullWidth: boolean = false;
  @Input() showBorder: boolean = false;
  @Input() customHeight: string = "auto";

  onClick(): void {
    this.action.emit();
  }

}
