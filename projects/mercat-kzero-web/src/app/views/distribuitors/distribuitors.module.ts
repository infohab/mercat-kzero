import { NgModule } from '@angular/core';
import { DistribuitorsComponent } from './distribuitors/distribuitors.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  declarations: [DistribuitorsComponent],
  imports: [MatCardModule, MatIconModule, MatBadgeModule],
  exports: [DistribuitorsComponent],
})
export class DistribuitorsModule {}
