import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSumaryComponent } from './reservation-sumary.component';

describe('ReservationSumaryComponent', () => {
  let component: ReservationSumaryComponent;
  let fixture: ComponentFixture<ReservationSumaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationSumaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
