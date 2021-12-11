import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteListComponent } from './recette-list.component';

describe('RecetteListComponent', () => {
  let component: RecetteListComponent;
  let fixture: ComponentFixture<RecetteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
