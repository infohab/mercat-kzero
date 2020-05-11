import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservationConfirmComponent } from '../reservation-confirm/reservation-confirm.component';
import { Router } from '@angular/router';
import { ReservationService } from '../../../core/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  public reservationForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    serviceType: [null, Validators.required],
    employee: [null, Validators.required],
    date: [null, Validators.required],
    time: [null, Validators.required]
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

  public get date(): AbstractControl {
    return this.reservationForm.get('date');
  }

  public get time(): AbstractControl {
    return this.reservationForm.get('time');
  }

  public saveReservation(formValues): void {
    const dialogRef = this.dialog.open(ReservationConfirmComponent, {
      width: '300px',
      height: '400px',
      data: {
        name: formValues.name,
        service: formValues.serviceType,
        employee: formValues.employee,
        date: formValues.date,
        time: formValues.time
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
    this.reservationService.sendClient(formValues);
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
