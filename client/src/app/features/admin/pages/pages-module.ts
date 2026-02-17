import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';

import { PagesRoutingModule } from './pages-routing-module';
import { Inventory } from './inventory/inventory';
import { LayoutModule } from "../../../shared/layout/layout-module";


@NgModule({
  declarations: [
    Inventory
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule
]
})
export class PagesModule { }
