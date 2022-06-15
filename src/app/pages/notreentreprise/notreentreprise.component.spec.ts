import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreentrepriseComponent } from './notreentreprise.component';

describe('NotreentrepriseComponent', () => {
  let component: NotreentrepriseComponent;
  let fixture: ComponentFixture<NotreentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
