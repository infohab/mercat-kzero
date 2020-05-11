import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.scss']
})
export class ReservationConfirmComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
