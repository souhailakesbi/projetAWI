import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModificationFicheComponent} from './modification-fiche.component';

describe('ModificationFicheComponent', () => {
  let component: ModificationFicheComponent;
  let fixture: ComponentFixture<ModificationFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificationFicheComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
