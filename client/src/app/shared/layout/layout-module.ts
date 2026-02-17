import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { UiIconButton } from '../ui/ui-icon-button/ui-icon-button';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared-module";

@NgModule({
  declarations: [Header, Sidebar, UiIconButton],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
],
  exports: [Header, Sidebar, UiIconButton]
})
export class LayoutModule { }
