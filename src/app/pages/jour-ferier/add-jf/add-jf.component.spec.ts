import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJFComponent } from './add-jf.component';

describe('AddJFComponent', () => {
  let component: AddJFComponent;
  let fixture: ComponentFixture<AddJFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
