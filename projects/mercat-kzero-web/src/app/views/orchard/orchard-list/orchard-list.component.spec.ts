import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchardListComponent } from './orchard-list.component';

describe('OrchardListComponent', () => {
  let component: OrchardListComponent;
  let fixture: ComponentFixture<OrchardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrchardListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
