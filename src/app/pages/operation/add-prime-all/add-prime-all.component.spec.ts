import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrimeAllComponent } from './add-prime-all.component';

describe('AddPrimeAllComponent', () => {
  let component: AddPrimeAllComponent;
  let fixture: ComponentFixture<AddPrimeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrimeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrimeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
