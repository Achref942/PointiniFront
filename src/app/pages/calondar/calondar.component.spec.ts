import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalondarComponent } from './calondar.component';

describe('CalondarComponent', () => {
  let component: CalondarComponent;
  let fixture: ComponentFixture<CalondarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalondarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalondarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
