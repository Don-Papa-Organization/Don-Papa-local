import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { MainLayout } from './main-layout/main-layout';
import { LayoutModule } from "../../shared/layout/layout-module";


@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
]
})
export class AdminModule { }
