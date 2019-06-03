import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticesComponent } from './diagnostices.component';

describe('DiagnosticesComponent', () => {
  let component: DiagnosticesComponent;
  let fixture: ComponentFixture<DiagnosticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
