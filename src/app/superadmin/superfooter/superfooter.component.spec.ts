import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperfooterComponent } from './superfooter.component';

describe('SuperfooterComponent', () => {
  let component: SuperfooterComponent;
  let fixture: ComponentFixture<SuperfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperfooterComponent]
    });
    fixture = TestBed.createComponent(SuperfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
