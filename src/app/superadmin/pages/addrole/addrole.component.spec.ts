import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroleComponent } from './addrole.component';

describe('AddroleComponent', () => {
  let component: AddroleComponent;
  let fixture: ComponentFixture<AddroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddroleComponent]
    });
    fixture = TestBed.createComponent(AddroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
