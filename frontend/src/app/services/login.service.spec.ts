import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isLoggedin', () => {
    let store = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      clear: () => {
        store = {};
      }
    };
    beforeEach(() => {
      spyOn(sessionStorage, 'getItem')
        .and.callFake(mockSessionStorage.getItem);
      spyOn(sessionStorage, 'clear')
        .and.callFake(mockSessionStorage.clear);
    });
    it('should state when a user is logged in', () => {
      mockSessionStorage.setItem('token', 'token');
      expect(service.isLoggedin()).toBeTruthy();
    });

    it('should state when a user is not logged in', () => {
      mockSessionStorage.clear();
      expect(service.isLoggedin()).toBeFalsy();
    });
  });

  describe('loginUser', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should post userDate to backend and get a token response', () => {
      const userData = {
        username: 'username',
        password: 'password'
      };
      const response = {
        key: 'token'
      };
      service.loginUser(userData).subscribe(
        response => {
          expect(response.key).toEqual('token');
        });
      const req = httpTestingController.expectOne(service.baseurl + '/rest-auth/login/');
      expect(req.request.method).toEqual('POST');

      req.flush(response);
    });
  });

  describe('logoutUser', () => {
    beforeEach(() => {
      spyOn(window, 'alert');
    });
    it('should clear sessionStorage', () => {
      expect(sessionStorage.length).toBe(0);
    });
    it('should alert the user they are logged out', () => {
      service.logoutUser();
      expect(window.alert).toHaveBeenCalledWith('You are logged out!');
    });
  });
})
;
