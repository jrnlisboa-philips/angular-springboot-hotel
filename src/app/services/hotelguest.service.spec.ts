import { TestBed } from '@angular/core/testing';

import { HotelguestService } from './hotelguest.service';

describe('HotelguestService', () => {
  let service: HotelguestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelguestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
