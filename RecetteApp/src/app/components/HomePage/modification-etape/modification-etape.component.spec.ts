import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationEtapeComponent } from './modification-etape.component';

describe('DetailsEtapeComponent', () => {
  let component: ModificationEtapeComponent;
  let fixture: ComponentFixture<ModificationEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationEtapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
