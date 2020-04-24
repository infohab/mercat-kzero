import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLanguageSelectorComponent } from './header-language-selector.component';

describe('HeaderLanguageSelectorComponent', () => {
  let component: HeaderLanguageSelectorComponent;
  let fixture: ComponentFixture<HeaderLanguageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLanguageSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
