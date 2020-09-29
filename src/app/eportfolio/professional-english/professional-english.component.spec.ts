import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalEnglishComponent } from './professional-english.component';

describe('ProfessionalEnglishComponent', () => {
  let component: ProfessionalEnglishComponent;
  let fixture: ComponentFixture<ProfessionalEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
