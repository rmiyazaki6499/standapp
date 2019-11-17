import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StandupService } from './standup.service';

describe('StandupService', () => {
  let service: StandupService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [StandupService]
  });
  service = TestBed.get(StandupService)
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStandups', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get all Standups from backend', () => {
      const standup1 = {
        date: '2019-11-16 18:17:06.226091'
      }
      const response = [standup1, standup1];
      service.getStandups().subscribe(
        response => {
          expect(response[0]).toEqual(standup1);
          expect(response.length).toEqual(2);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/standups/');
      expect(req.request.method).toEqual('GET');

      req.flush(response);
    });
  });

  describe('getOneStandup', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get one Standup from backend', () => {
      const id = 5
      const standup1 = {
        date: '2019-11-16 18:17:06.226091'
      }
      const response = {
        progresses: standup1
      };
      service.getOneStandup(id).subscribe(
        response => {
          expect(response.progresses).toEqual(standup1);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/standups/' + id + '/');
      expect(req.request.method).toEqual('GET');

      req.flush(response);
    });
  });

  describe('updateStandup', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should update one Standup from backend', () => {
      const standup1 = {
        date: '2019-11-16 18:17:06.226091',
        id: 4
      }
      const response = standup1;
      service.updateStandup(standup1).subscribe(
        response => {
          expect(response).toEqual(standup1);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/standups/' + standup1.id + '/', standup1.toString());
      expect(req.request.method).toEqual('PUT');

      req.flush(response);
    });
  });

  describe('createStandup', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should create one new Standup from backend', () => {
      const standupFromUser = {
        date: '2019-11-16 18:17:06.226091',
      }
      const standupCreatedFromBackend = {
        date: '2019-11-16 18:17:06.226091',
        id: 2
      }
      const response = standupCreatedFromBackend;
      service.createStandup(standupFromUser).subscribe(
        response => {
          expect(response).toEqual(standupCreatedFromBackend);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/standups/', standupFromUser.toString());
      expect(req.request.method).toEqual('POST');

      req.flush(response);
    });
  });

  describe('deleteStandup', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should delete one progress from backend', () => {
      const standupToBeDeleted = {
        date: '2019-11-16 18:17:06.226091',
        id: 2
      }
      const response = {};
      service.deleteStandup(standupToBeDeleted).subscribe(
        response => {
          expect(response).toEqual({});
        });
      const req = httpTestingController.expectOne(service.baseurl + '/standups/' + standupToBeDeleted.id + '/');
      expect(req.request.method).toEqual('DELETE');

      req.flush(response);
    });
  });

});
