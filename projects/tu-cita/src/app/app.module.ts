import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewModule } from './components/map-view/map-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationModule } from './components/reservation/reservation.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MapViewModule,
    ReservationModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
