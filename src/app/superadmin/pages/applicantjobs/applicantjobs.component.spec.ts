import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantjobsComponent } from './applicantjobs.component';

describe('ApplicantjobsComponent', () => {
  let component: ApplicantjobsComponent;
  let fixture: ComponentFixture<ApplicantjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantjobsComponent]
    });
    fixture = TestBed.createComponent(ApplicantjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
