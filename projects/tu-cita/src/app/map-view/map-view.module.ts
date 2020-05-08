import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMapComponent } from './product-map/product-map.component';

@NgModule({
  declarations: [ProductMapComponent],
  exports: [ProductMapComponent],
  imports: [CommonModule],
})
export class MapViewModule {}
