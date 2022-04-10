import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstitutesComponent } from './delete-institutes.component';

describe('DeleteInstitutesComponent', () => {
  let component: DeleteInstitutesComponent;
  let fixture: ComponentFixture<DeleteInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
