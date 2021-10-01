import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCvViewComponent } from './candidate-cv-view.component';

describe('CandidateCvViewComponent', () => {
  let component: CandidateCvViewComponent;
  let fixture: ComponentFixture<CandidateCvViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCvViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
