import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceViewComponent } from './job-experience-view.component';

describe('JobExperienceViewComponent', () => {
  let component: JobExperienceViewComponent;
  let fixture: ComponentFixture<JobExperienceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExperienceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExperienceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
