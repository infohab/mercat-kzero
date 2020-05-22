import { Component } from '@angular/core';
import { ReservationService } from '../../../core/reservation/reservation.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent {
  public calendarLink = (): string => {
    const baseCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const title = 'Corte de cabello en Montjuic';
    const description =
      'TuCita para corte de cabello en Montjuic. Recuerda seguirnos en todas las redes sociales y ganar descuentos invitando amigos a utilizar nuestra aplicación.';
    const startDate = new Date(2020, 4, 22, 10, 45).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(2020, 4, 22, 11, 30).toISOString().replace(/-|:|\.\d\d\d/g, '');
    return `${baseCalendarUrl}&text=${title}&dates=${startDate}/${endDate}&details=${description}&sf=true&output=xml`;
  };
  constructor(public reservationService: ReservationService) {}
}
