import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSAComponent } from './update-sa.component';

describe('UpdateSAComponent', () => {
  let component: UpdateSAComponent;
  let fixture: ComponentFixture<UpdateSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
