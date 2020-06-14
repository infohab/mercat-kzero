import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCardsComponent } from './role-cards.component';

describe('RoleCardsComponent', () => {
  let component: RoleCardsComponent;
  let fixture: ComponentFixture<RoleCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoleCardsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
