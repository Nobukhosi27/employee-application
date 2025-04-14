import { TestBed } from '@angular/core/testing';

import { MockFingerprintService } from './mock-fingerprint.service';

describe('MockFingerprintService', () => {
  let service: MockFingerprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockFingerprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
