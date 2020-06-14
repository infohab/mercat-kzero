import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourRoleComponent } from './your-role.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [YourRoleComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [YourRoleComponent]
})
export class YourRoleModule {}
