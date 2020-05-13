import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservationConfirmComponent } from '../reservation-confirm/reservation-confirm.component';
import { Router } from '@angular/router';
import { ReservationService } from '../../../core/reservation/reservation.service';
import { Reservation } from '../../../core/reservation/reservation.interface';
import { getReadableTime } from '../../../shared/utils';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  public getReadableTime = getReadableTime;
  public minDate = moment().toDate();
  public maxDate = moment().add(7, 'days').toDate();
  public availableTimeSlots = [1589540400000, 1589541300000, 1589542200000, 1589543100000, 1589544000000];

  public reservationForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    serviceType: [null, Validators.required],
    employee: [null, Validators.required],
    date: [this.minDate, Validators.required],
    time: [this.availableTimeSlots[0], Validators.required]
  });

  public constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  public get name(): AbstractControl {
    return this.reservationForm.get('name');
  }

  public get employee(): AbstractControl {
    return this.reservationForm.get('employee');
  }

  public get serviceType(): AbstractControl {
    return this.reservationForm.get('serviceType');
  }

  public get date(): AbstractControl {
    return this.reservationForm.get('date');
  }

  public get time(): AbstractControl {
    return this.reservationForm.get('time');
  }

  public saveReservation(reservationData: Reservation): void {
    const dialogRef = this.dialog.open(ReservationConfirmComponent, {
      autoFocus: false,
      disableClose: true,
      data: reservationData
    });
    dialogRef.afterClosed().subscribe((saveReservation) => {
      if (saveReservation) {
        this.reservationService.setReservation(reservationData);
        this.router.navigateByUrl('/reservation-summary');
      }
    });
  }

  public onServiceChange(): void {
    this.employee.setValue(null);
    this.date.setValue(null);
    this.time.setValue(null);
  }

  public onEmployeeChange(): void {
    this.date.setValue(null);
    this.time.setValue(null);
  }

  public onDateChange(): void {
    this.time.setValue(null);
  }
}
