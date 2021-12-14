import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChefComponent } from './ajouter-chef.component';

describe('AjouterChefComponent', () => {
  let component: AjouterChefComponent;
  let fixture: ComponentFixture<AjouterChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
