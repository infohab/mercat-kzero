import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourRoleComponent } from './your-role.component';

describe('YourRoleComponent', () => {
  let component: YourRoleComponent;
  let fixture: ComponentFixture<YourRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YourRoleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
