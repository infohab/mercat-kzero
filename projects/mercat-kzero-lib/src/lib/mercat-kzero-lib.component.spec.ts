import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercatKzeroLibComponent } from './mercat-kzero-lib.component';

describe('MercatKzeroLibComponent', () => {
  let component: MercatKzeroLibComponent;
  let fixture: ComponentFixture<MercatKzeroLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MercatKzeroLibComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercatKzeroLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
