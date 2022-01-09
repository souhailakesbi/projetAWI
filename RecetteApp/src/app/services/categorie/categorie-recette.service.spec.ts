import { TestBed } from '@angular/core/testing';

import { CategorieRecetteService } from './categorie-recette.service';

describe('CategorieRecetteService', () => {
  let service: CategorieRecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieRecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
