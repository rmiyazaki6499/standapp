import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RegisterService]
  });
  service = TestBed.get(RegisterService)
});

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });

  describe('registerNewUser', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get one progresses from backend', () => {
      const userData = {
        username: 'cheech',
        email: 'cheech@gmail.com',
        password1: 'password',
        password2: 'password',
      }
      const response = {};
      service.registerNewUser(userData).subscribe(
        response => {
          expect(response).toEqual({});
        });
      const req = httpTestingController.expectOne(service.baseurl + '/rest-auth/registration/', userData.toString());
      expect(req.request.method).toEqual('POST');

      req.flush(response);
    });
  });

});
