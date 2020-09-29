import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipComponent } from './apprenticeship.component';

describe('ApprenticeshipComponent', () => {
  let component: ApprenticeshipComponent;
  let fixture: ComponentFixture<ApprenticeshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
