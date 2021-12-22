import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FichePrixComponent} from './fiche-prix.component';

describe('FichePrixComponent', () => {
  let component: FichePrixComponent;
  let fixture: ComponentFixture<FichePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichePrixComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
