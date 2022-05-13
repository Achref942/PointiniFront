import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCComponent } from './liste-c.component';

describe('ListeCComponent', () => {
  let component: ListeCComponent;
  let fixture: ComponentFixture<ListeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
