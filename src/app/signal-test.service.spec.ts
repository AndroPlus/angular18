import { TestBed } from '@angular/core/testing';

import { SignalTestService } from './signal-test.service';

describe('SignalTestService', () => {
  let service: SignalTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
