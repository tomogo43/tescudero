import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EportfolioComponent } from './eportfolio.component';

describe('EportfolioComponent', () => {
  let component: EportfolioComponent;
  let fixture: ComponentFixture<EportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
