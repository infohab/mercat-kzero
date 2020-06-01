import { Component, OnInit } from '@angular/core';
import { ReservationStoreService } from '../../../core/reservation/reservation-store.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SiteStoreService } from '../../../core/site/site-store.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent implements OnInit {
  private reservation = this.reservationStoreService.reservation;
  public calendarLink = (): string => {
    const baseCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const title = `${this.reservation?.serviceType?.serviceName} at ${this.reservation?.place}`;
    const description = `Recordatorio de cita para ${title}. Recuerda seguirnos en todas las redes sociales y ganar descuentos invitando amigos a utilizar nuestra aplicación.`;
    const startDate = new Date().toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date().toISOString().replace(/-|:|\.\d\d\d/g, '');
    return `${baseCalendarUrl}&text=${title}&dates=${startDate}/${endDate}&details=${description}&sf=true&output=xml`;
  };
  constructor(
    public reservationStoreService: ReservationStoreService,
    private router: Router,
    private siteStoreService: SiteStoreService
  ) {}

  public ngOnInit(): void {
    this.reservationStoreService.reservation$
      .pipe(
        tap((reservation) => {
          if (!reservation) {
            this.router.navigateByUrl('/');
          }
        })
      )
      .subscribe();
  }
}
