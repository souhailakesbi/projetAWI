import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterIngredientComponent } from './ajouter-ingredient.component';

describe('AjouterIngredientComponent', () => {
  let component: AjouterIngredientComponent;
  let fixture: ComponentFixture<AjouterIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
