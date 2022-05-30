import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSAComponent } from './add-sa.component';

describe('AddSAComponent', () => {
  let component: AddSAComponent;
  let fixture: ComponentFixture<AddSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
