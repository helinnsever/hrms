import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateWebsiteComponent } from './candidate-website.component';

describe('CandidateWebsiteComponent', () => {
  let component: CandidateWebsiteComponent;
  let fixture: ComponentFixture<CandidateWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
