import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';

import { PagesRoutingModule } from './pages-routing-module';
import { LayoutModule } from "../../../shared/layout/layout-module";
import { FormsModule, NgForm } from '@angular/forms';
import { InventoryModule } from './inventory/inventory-module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    InventoryModule
  ]
})
export class PagesModule { }
