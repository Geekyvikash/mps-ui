import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersidenavComponent } from './supersidenav.component';

describe('SupersidenavComponent', () => {
  let component: SupersidenavComponent;
  let fixture: ComponentFixture<SupersidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupersidenavComponent]
    });
    fixture = TestBed.createComponent(SupersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
