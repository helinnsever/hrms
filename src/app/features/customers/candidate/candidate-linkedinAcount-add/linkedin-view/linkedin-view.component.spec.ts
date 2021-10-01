import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinViewComponent } from './linkedin-view.component';

describe('LinkedinViewComponent', () => {
  let component: LinkedinViewComponent;
  let fixture: ComponentFixture<LinkedinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
