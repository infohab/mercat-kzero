import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  public reservationForm = this.formBuilder.group({
    name: ['', Validators.required],
    serviceType: ['', Validators.required],
    employee: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  public constructor(private formBuilder: FormBuilder) {}
}
