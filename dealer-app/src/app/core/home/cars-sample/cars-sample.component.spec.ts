import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSampleComponent } from './cars-sample.component';

describe('CarsSampleComponent', () => {
  let component: CarsSampleComponent;
  let fixture: ComponentFixture<CarsSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
