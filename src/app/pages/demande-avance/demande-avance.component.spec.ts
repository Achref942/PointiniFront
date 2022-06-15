import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAvanceComponent } from './demande-avance.component';

describe('DemandeAvanceComponent', () => {
  let component: DemandeAvanceComponent;
  let fixture: ComponentFixture<DemandeAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
