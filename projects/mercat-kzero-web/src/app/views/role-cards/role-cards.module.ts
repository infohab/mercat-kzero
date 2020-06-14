import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCardsComponent } from './role-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RoleCardsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [RoleCardsComponent]
})
export class RoleCardsModule {}
