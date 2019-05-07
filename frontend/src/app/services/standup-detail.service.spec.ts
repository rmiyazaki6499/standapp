import { TestBed } from '@angular/core/testing';

import { StandupDetailService } from './standup-detail.service';

describe('StandupDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandupDetailService = TestBed.get(StandupDetailService);
    expect(service).toBeTruthy();
  });
});
