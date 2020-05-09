import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMapComponent } from './product-map/product-map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProductMapComponent, MapViewComponent],
  exports: [ProductMapComponent, MapViewComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule]
})
export class MapViewModule {}
