import { TestBed } from '@angular/core/testing';

import { UnverifiedJobListGuard } from './unverified-job-list.guard';

describe('UnverifiedJobListGuard', () => {
  let guard: UnverifiedJobListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnverifiedJobListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
