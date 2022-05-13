import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJFComponent } from './update-jf.component';

describe('UpdateJFComponent', () => {
  let component: UpdateJFComponent;
  let fixture: ComponentFixture<UpdateJFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
