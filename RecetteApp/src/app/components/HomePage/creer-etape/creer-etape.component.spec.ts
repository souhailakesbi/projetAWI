import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEtapeComponent } from './creer-etape.component';

describe('CreerEtapeComponent', () => {
  let component: CreerEtapeComponent;
  let fixture: ComponentFixture<CreerEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerEtapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
