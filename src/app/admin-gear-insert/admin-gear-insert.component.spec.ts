import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGearInsertComponent } from './admin-gear-insert.component';

describe('AdminGearInsertComponent', () => {
  let component: AdminGearInsertComponent;
  let fixture: ComponentFixture<AdminGearInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGearInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGearInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
