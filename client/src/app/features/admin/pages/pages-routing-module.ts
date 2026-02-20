import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '../main-layout/main-layout';

const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", pathMatch: "full", redirectTo: "inventory" },
      { path: "inventory", loadChildren: () => import('./inventory/inventory-module').then(m => m.InventoryModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
