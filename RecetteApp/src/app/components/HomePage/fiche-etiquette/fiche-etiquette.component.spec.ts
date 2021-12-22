import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FicheEtiquetteComponent} from './fiche-etiquette.component';

describe('FicheEtiquetteComponent', () => {
  let component: FicheEtiquetteComponent;
  let fixture: ComponentFixture<FicheEtiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheEtiquetteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
