import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductModule } from '../product/product.module';
import { MapViewModule } from '../map-view/map-view.module';
import { MainContentRoutingModule } from './main-content-routing.module';
import { DescriptionModule } from '../description/description.module';
import { OrchardModule } from '../orchard/orchard.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    ProductModule,
    MapViewModule,
    DescriptionModule,
    OrchardModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class MainContentModule {}
