import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from './business-details/business-details.component';

const routes = [{ path: '', component: BusinessDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {}
