import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      RegisterService
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
