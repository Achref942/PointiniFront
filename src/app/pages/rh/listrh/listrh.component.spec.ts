import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrhComponent } from './listrh.component';

describe('ListrhComponent', () => {
  let component: ListrhComponent;
  let fixture: ComponentFixture<ListrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
