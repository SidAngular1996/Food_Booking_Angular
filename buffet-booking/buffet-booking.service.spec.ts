import { TestBed, inject } from '@angular/core/testing';

import { BuffetBookingService } from './buffet-booking.service';

describe('BuffetBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuffetBookingService]
    });
  });

  it('should be created', inject([BuffetBookingService], (service: BuffetBookingService) => {
    expect(service).toBeTruthy();
  }));
});
