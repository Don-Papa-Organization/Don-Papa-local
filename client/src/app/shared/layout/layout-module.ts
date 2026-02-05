import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { UiIconButton } from '../ui/ui-icon-button/ui-icon-button';
import { AppRoutingModule } from "../../app-routing-module";

@NgModule({
  declarations: [Header, Sidebar, UiIconButton],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports: [Header, Sidebar, UiIconButton]
})
export class LayoutModule { }
