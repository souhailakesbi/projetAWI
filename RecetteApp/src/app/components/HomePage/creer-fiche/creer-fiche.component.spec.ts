import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerFicheComponent } from './creer-fiche.component';

describe('CreerFicheComponent', () => {
  let component: CreerFicheComponent;
  let fixture: ComponentFixture<CreerFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
