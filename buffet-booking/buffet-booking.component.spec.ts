import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetBookingComponent } from './buffet-booking.component';

describe('BuffetBookingComponent', () => {
  let component: BuffetBookingComponent;
  let fixture: ComponentFixture<BuffetBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffetBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
