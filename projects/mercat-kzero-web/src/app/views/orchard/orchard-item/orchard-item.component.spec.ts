import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchardItemComponent } from './orchard-item.component';

describe('OrchardItemComponent', () => {
  let component: OrchardItemComponent;
  let fixture: ComponentFixture<OrchardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrchardItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
