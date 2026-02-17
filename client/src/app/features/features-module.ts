import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout/layout-module';
import { FeaturesRoutingModule } from './features-routing-module';
import { Catalog } from './catalog/catalog';
import { SharedModule } from "../shared/shared-module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Catalog
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule
]
})
export class FeaturesModule { }
