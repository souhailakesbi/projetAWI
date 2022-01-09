import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutsComponent } from './couts.component';

describe('CoutsComponent', () => {
  let component: CoutsComponent;
  let fixture: ComponentFixture<CoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
