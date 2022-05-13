import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemmandecongeComponent } from './demmandeconge.component';

describe('DemmandecongeComponent', () => {
  let component: DemmandecongeComponent;
  let fixture: ComponentFixture<DemmandecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemmandecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemmandecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
