import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGearUpdateComponent } from './admin-gear-update.component';

describe('AdminGearUpdateComponent', () => {
  let component: AdminGearUpdateComponent;
  let fixture: ComponentFixture<AdminGearUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGearUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGearUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
