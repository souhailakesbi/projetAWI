import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutStockComponent } from './ajout-stock.component';

describe('AjoutStockComponent', () => {
  let component: AjoutStockComponent;
  let fixture: ComponentFixture<AjoutStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
