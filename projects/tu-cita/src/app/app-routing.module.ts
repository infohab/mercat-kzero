import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMapComponent } from 'projects/mercat-kzero-web/src/app/views/map-view/product-map/product-map.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';

const routes: Routes = [
  { path: 'home', component: ProductMapComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservationDetails', component: ReservationDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
