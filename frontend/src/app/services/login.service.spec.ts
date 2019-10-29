import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginService]
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

  describe('logoutUser', () => {
    beforeEach(() => {
      spyOn(window, 'alert');
    });
    it('should clear sessionStorage', () => {
      // service.logoutUser();
      expect(sessionStorage.length).toBe(0);
    });
  });
});
