import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeentrepriseComponent } from './listeentreprise.component';

describe('ListeentrepriseComponent', () => {
  let component: ListeentrepriseComponent;
  let fixture: ComponentFixture<ListeentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
