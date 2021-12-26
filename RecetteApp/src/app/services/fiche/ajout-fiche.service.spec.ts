import { TestBed } from '@angular/core/testing';

import { AjoutFicheService } from './ajout-fiche.service';

describe('AjoutFicheService', () => {
  let service: AjoutFicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutFicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
