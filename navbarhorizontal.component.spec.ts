import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhorizontalComponent } from './navbarhorizontal.component';

describe('NavbarhorizontalComponent', () => {
  let component: NavbarhorizontalComponent;
  let fixture: ComponentFixture<NavbarhorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarhorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
