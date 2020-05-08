import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SelectProductsComponent } from '../product/select-products/select-products.component';

const routes = [
  { path: '', component: MainContentComponent },
  {
    path: 'products',
    component: SelectProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule {}
