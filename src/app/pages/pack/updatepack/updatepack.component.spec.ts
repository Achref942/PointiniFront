import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepackComponent } from './updatepack.component';

describe('UpdatepackComponent', () => {
  let component: UpdatepackComponent;
  let fixture: ComponentFixture<UpdatepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
