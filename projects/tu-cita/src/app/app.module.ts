import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewModule } from './components/map-view/map-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationModule } from './components/reservation/reservation.module';
import { HttpClientModule } from '@angular/common/http';
import { BackOfficeModule } from './components/back-office/back-office.module';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MapViewModule,
    ReservationModule,
    BackOfficeModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
