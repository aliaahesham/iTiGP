import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCarDealerComponent } from './about-car-dealer.component';

describe('AboutCarDealerComponent', () => {
  let component: AboutCarDealerComponent;
  let fixture: ComponentFixture<AboutCarDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCarDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCarDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
