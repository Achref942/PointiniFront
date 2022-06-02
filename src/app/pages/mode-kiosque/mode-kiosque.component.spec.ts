import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeKiosqueComponent } from './mode-kiosque.component';

describe('ModeKiosqueComponent', () => {
  let component: ModeKiosqueComponent;
  let fixture: ComponentFixture<ModeKiosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeKiosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeKiosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
