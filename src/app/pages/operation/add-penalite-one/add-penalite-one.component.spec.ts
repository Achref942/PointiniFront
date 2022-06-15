import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaliteOneComponent } from './add-penalite-one.component';

describe('AddPenaliteOneComponent', () => {
  let component: AddPenaliteOneComponent;
  let fixture: ComponentFixture<AddPenaliteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPenaliteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenaliteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
