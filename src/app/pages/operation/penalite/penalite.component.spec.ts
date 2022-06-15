import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaliteComponent } from './penalite.component';

describe('PenaliteComponent', () => {
  let component: PenaliteComponent;
  let fixture: ComponentFixture<PenaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
