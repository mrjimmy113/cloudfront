import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGearDashComponent } from './admin-gear-dash.component';

describe('AdminGearDashComponent', () => {
  let component: AdminGearDashComponent;
  let fixture: ComponentFixture<AdminGearDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGearDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGearDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
