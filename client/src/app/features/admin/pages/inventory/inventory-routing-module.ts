import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInventory } from './main-inventory/main-inventory';

const routes: Routes = [
  {path: "", component: MainInventory}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
