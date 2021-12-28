import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStepComponent } from './liste-step.component';

describe('ListeStepComponent', () => {
  let component: ListeStepComponent;
  let fixture: ComponentFixture<ListeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
