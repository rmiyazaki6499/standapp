import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StandupService } from './standup.service';

describe('StandupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      StandupService
    ]
  }));

  it('should be created', () => {
    const service: StandupService = TestBed.get(StandupService);
    expect(service).toBeTruthy();
  });
});
