import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '../main-layout/main-layout';
import { Inventory } from './inventory/inventory';

const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", pathMatch: "full", redirectTo: "inventory" },
      { path: "inventory",component: Inventory }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
