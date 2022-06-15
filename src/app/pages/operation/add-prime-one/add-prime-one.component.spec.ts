import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrimeOneComponent } from './add-prime-one.component';

describe('AddPrimeOneComponent', () => {
  let component: AddPrimeOneComponent;
  let fixture: ComponentFixture<AddPrimeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrimeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrimeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
