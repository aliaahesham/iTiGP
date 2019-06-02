import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesItemComponent } from './accessories-item.component';

describe('AccessoriesItemComponent', () => {
  let component: AccessoriesItemComponent;
  let fixture: ComponentFixture<AccessoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
