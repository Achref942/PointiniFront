import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJFComponent } from './liste-jf.component';

describe('ListeJFComponent', () => {
  let component: ListeJFComponent;
  let fixture: ComponentFixture<ListeJFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeJFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeJFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
