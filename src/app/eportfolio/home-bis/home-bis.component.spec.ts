import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBisComponent } from './home-bis.component';

describe('HomeBisComponent', () => {
  let component: HomeBisComponent;
  let fixture: ComponentFixture<HomeBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
