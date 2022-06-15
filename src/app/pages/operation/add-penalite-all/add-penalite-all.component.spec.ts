import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaliteAllComponent } from './add-penalite-all.component';

describe('AddPenaliteAllComponent', () => {
  let component: AddPenaliteAllComponent;
  let fixture: ComponentFixture<AddPenaliteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPenaliteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenaliteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
