import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsFicheComponent} from './details-fiche.component';

describe('DetailsFicheComponent', () => {
  let component: DetailsFicheComponent;
  let fixture: ComponentFixture<DetailsFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsFicheComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
