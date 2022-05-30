import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSAComponent } from './list-sa.component';

describe('ListSAComponent', () => {
  let component: ListSAComponent;
  let fixture: ComponentFixture<ListSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
