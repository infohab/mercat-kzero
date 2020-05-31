import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  reservations$ = of([
    {
      id: 'A2020B5C26D637261145514241151',
      unitId: 'A2020B5C26D637260589810838838',
      servicioId: 'F2020E5B19G637255042464886032',
      resourceName: 'Pedro',
      slot: {
        startTime: '2020-05-25T09:30:00Z',
        endTime: '2020-05-25T10:00:00Z'
      },
      quantity: 1,
      status: 0
    },
    {
      id: 'A2020B5C30D637264394110657268',
      unitId: 'A2020B5C26D637260589810838838',
      servicioId: 'F2020E5B19G637255042464886032',
      resourceName: 'Pedro',
      slot: {
        startTime: '2020-05-25T15:00:00Z',
        endTime: '2020-05-25T16:00:00Z'
      },
      quantity: 1,
      status: 0
    }
  ]);
}
