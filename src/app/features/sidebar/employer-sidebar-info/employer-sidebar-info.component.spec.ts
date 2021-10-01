import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSidebarInfoComponent } from './employer-sidebar-info.component';

describe('EmployerSidebarInfoComponent', () => {
  let component: EmployerSidebarInfoComponent;
  let fixture: ComponentFixture<EmployerSidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerSidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
