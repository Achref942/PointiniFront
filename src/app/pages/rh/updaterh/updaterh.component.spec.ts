import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterhComponent } from './updaterh.component';

describe('UpdaterhComponent', () => {
  let component: UpdaterhComponent;
  let fixture: ComponentFixture<UpdaterhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
