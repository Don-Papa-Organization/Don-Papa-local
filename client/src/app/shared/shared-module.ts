import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalComponent } from './ui/ui-modal.component/ui-modal.component';
import { UiBreadcrumbsComponent } from './ui/ui-breadcrumbs/ui-breadcrumbs';
import { UiButton } from './ui/ui-button/ui-button';
import { UiInput } from './ui/ui-input/ui-input';
import { UiButtonGridComponent } from './ui/ui-button-grid/ui-button-grid';
import { UiProductCard } from './ui/ui-product-card/ui-product-card';
import { UiOnlyIconButton } from './ui/ui-only-icon-button/ui-only-icon-button';
import { UiTabla } from './ui/ui-tabla/ui-tabla';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UiModalComponent,
    UiBreadcrumbsComponent,
    UiButton,
    UiInput,
    UiButtonGridComponent,
    UiProductCard,
    UiOnlyIconButton,
    UiTabla
  ],
  imports: [
    CommonModule,
    RouterModule
],
  exports: [
    UiModalComponent,
    UiBreadcrumbsComponent,
    UiButton,
    UiInput,
    UiButtonGridComponent,
    UiProductCard,
    UiOnlyIconButton,
    UiTabla
  ]
})
export class SharedModule { }
