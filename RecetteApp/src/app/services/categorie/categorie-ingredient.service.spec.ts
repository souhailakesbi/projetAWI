import { TestBed } from '@angular/core/testing';

import { CategorieIngredientService } from './categorie-ingredient.service';

describe('CategorieIngredientService', () => {
  let service: CategorieIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
