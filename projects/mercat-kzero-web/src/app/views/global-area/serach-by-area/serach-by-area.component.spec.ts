import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachByAreaComponent } from './serach-by-area.component';

describe('SerachByAreaComponent', () => {
  let component: SerachByAreaComponent;
  let fixture: ComponentFixture<SerachByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerachByAreaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
