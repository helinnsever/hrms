import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeSidebarInfoComponent } from './system-employee-sidebar-info.component';

describe('SystemEmployeeSidebarInfoComponent', () => {
  let component: SystemEmployeeSidebarInfoComponent;
  let fixture: ComponentFixture<SystemEmployeeSidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeSidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeSidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
