import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepackComponent } from './listepack.component';

describe('ListepackComponent', () => {
  let component: ListepackComponent;
  let fixture: ComponentFixture<ListepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
