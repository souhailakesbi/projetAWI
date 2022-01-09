import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationStockComponent } from './modification-stock.component';

describe('ModificationStockComponent', () => {
  let component: ModificationStockComponent;
  let fixture: ComponentFixture<ModificationStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
