import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing-module';
import { MainLayout } from './main-layout/main-layout';
import { LayoutModule } from '../../shared/layout/layout-module';


@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ]
})
export class ClientModule { }
