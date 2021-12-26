import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtapeComponent } from './details-etape.component';

describe('DetailsEtapeComponent', () => {
  let component: DetailsEtapeComponent;
  let fixture: ComponentFixture<DetailsEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEtapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
