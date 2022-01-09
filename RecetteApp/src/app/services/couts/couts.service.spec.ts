import { TestBed } from '@angular/core/testing';

import { CoutsService } from './couts.service';

describe('CoutsService', () => {
  let service: CoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
