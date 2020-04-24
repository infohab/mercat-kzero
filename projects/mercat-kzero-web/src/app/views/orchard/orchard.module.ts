import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrchardListComponent } from './orchard-list/orchard-list.component';
import { OrchardItemComponent } from './orchard-item/orchard-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OrchardListComponent, OrchardItemComponent],
  exports: [OrchardListComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
})
export class OrchardModule {}
