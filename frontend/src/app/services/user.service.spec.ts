import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserService]
  })
  service = TestBed.get(UserService)
});

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  describe('getUsername', () => {
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
    it('should retrieve username from sessionStorage', () => {
      mockSessionStorage.setItem('username', 'username');
      expect(service.getUsername()).toBeTruthy();
    });

    it('should not be able to retriece username from sessionStorage', () => {
      mockSessionStorage.clear();
      expect(service.getUsername()).toBeFalsy();
    });
  });

});
