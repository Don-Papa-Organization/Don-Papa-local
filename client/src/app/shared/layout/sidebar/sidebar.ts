import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() menuItems: MenuItem[] = [];
  @Input() collapsed = false;
  @Output() toggleCollapsed = new EventEmitter<void>();

  onToggle(): void {
    this.toggleCollapsed.emit();
  }

}
