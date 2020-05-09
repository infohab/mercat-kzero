import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { MapViewComponent } from './map-view/map-view/map-view.component';

const routes: Routes = [
  { path: '', component: MapViewComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservationDetails', component: ReservationDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
