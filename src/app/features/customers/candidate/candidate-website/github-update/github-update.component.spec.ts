import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUpdateComponent } from './github-update.component';

describe('GithubUpdateComponent', () => {
  let component: GithubUpdateComponent;
  let fixture: ComponentFixture<GithubUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
