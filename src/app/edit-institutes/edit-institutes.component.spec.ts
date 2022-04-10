import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutesComponent } from './edit-institutes.component';

describe('EditInstitutesComponent', () => {
  let component: EditInstitutesComponent;
  let fixture: ComponentFixture<EditInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
