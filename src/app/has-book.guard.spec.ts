import { TestBed } from '@angular/core/testing';

import { HasBookGuard } from './has-book.guard';

describe('HasBookGuard', () => {
  let guard: HasBookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
