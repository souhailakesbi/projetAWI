import { TestBed } from '@angular/core/testing';

import { AllergeneService } from './allergene.service';

describe('AllergeneService', () => {
  let service: AllergeneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergeneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
