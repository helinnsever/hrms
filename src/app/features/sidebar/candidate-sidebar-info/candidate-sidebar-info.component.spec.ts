import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSidebarInfoComponent } from './candidate-sidebar-info.component';

describe('CandidateSidebarInfoComponent', () => {
  let component: CandidateSidebarInfoComponent;
  let fixture: ComponentFixture<CandidateSidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
