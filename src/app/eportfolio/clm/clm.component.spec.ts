import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLMComponent } from './clm.component';

describe('CLMComponent', () => {
  let component: CLMComponent;
  let fixture: ComponentFixture<CLMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
