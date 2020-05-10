import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewModule } from './map-view/map-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationModule } from './components/reservation/reservation.module';
import { ConfirmationComponent } from './components/reservation/confirmation/confirmation.component';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent],
  imports: [BrowserModule, AppRoutingModule, MapViewModule, BrowserAnimationsModule, ReservationModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
