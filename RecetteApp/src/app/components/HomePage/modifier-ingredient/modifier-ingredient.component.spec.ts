import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierIngredientComponent } from './modifier-ingredient.component';

describe('ModifierIngredientComponent', () => {
  let component: ModifierIngredientComponent;
  let fixture: ComponentFixture<ModifierIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
