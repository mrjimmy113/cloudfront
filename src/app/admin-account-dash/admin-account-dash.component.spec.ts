import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountDashComponent } from './admin-account-dash.component';

describe('AdminAccountDashComponent', () => {
  let component: AdminAccountDashComponent;
  let fixture: ComponentFixture<AdminAccountDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
