import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheaderComponent } from './superheader.component';

describe('SuperheaderComponent', () => {
  let component: SuperheaderComponent;
  let fixture: ComponentFixture<SuperheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheaderComponent]
    });
    fixture = TestBed.createComponent(SuperheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
