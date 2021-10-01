import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinUpdateComponent } from './linkedin-update.component';

describe('LinkedinUpdateComponent', () => {
  let component: LinkedinUpdateComponent;
  let fixture: ComponentFixture<LinkedinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
