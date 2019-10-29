import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProgressService } from './progress.service';
import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      LoginService
    ]
  }));

  it('should be created', () => {
    const service: ProgressService = TestBed.get(ProgressService);
    expect(service).toBeTruthy();
  });
});
