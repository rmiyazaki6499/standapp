import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProgressService } from './progress.service';

describe('ProgressService', () => {
  let service: ProgressService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProgressService]
    });
    service = TestBed.get(ProgressService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllProgresses', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get all progresses from backend', () => {
      const progress1 = {
        accomplished: 'Finished LoginService',
        working_on: 'ProgressService',
        blocker: 'Learning to test stuff'
      }
      const response = [progress1, progress1];
      service.getAllProgresses().subscribe(
        response => {
          expect(response[0]).toEqual(progress1);
          expect(response.length).toEqual(2);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/');
      expect(req.request.method).toEqual('GET');

      req.flush(response);
    });
  });

  describe('getOneProgress', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get one progresses from backend', () => {
      const id = 9
      const progress1 = {
        accomplished: 'Finished LoginService',
        working_on: 'ProgressService',
        blocker: 'Learning to test stuff'
      }
      const response = {
        progresses: progress1
      };
      service.getOneProgress(id).subscribe(
        response => {
          expect(response.progresses).toEqual(progress1);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/' + id + '/');
      expect(req.request.method).toEqual('GET');

      req.flush(response);
    });
  });

  describe('updateProgress', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should update one progresses from backend', () => {
      const progress1 = {
        accomplished: 'Finished LoginService a while ago',
        working_on: 'ProgressService methods',
        blocker: 'Doing Unit Testing!',
        id: 4
      }
      const response = progress1;
      service.updateProgress(progress1).subscribe(
        response => {
          expect(response).toEqual(progress1);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/' + progress1.id + '/', progress1.toString());
      expect(req.request.method).toEqual('PUT');

      req.flush(response);
    });
  });

  describe('createProgress', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should create one new progresses from backend', () => {
      const progressFromUser = {
        accomplished: 'Finished LoginService a while ago',
        working_on: 'ProgressService methods',
        blocker: 'Doing Unit Testing!'
      }
      const progressCreatedFromBackend = {
        accomplished: 'Finished LoginService a while ago',
        working_on: 'ProgressService methods',
        blocker: 'Doing Unit Testing!',
        id: 2
      }
      const response = progressCreatedFromBackend;
      service.createProgress(progressFromUser).subscribe(
        response => {
          expect(response).toEqual(progressCreatedFromBackend);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/', progressFromUser.toString());
      expect(req.request.method).toEqual('POST');

      req.flush(response);
    });
  });

  describe('deleteProgress', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should delete one progress from backend', () => {
      const progressToBeDeleted = {
        accomplished: 'Finished LoginService a while ago',
        working_on: 'ProgressService methods',
        blocker: 'Doing Unit Testing!',
        id: 2
      }
      const response = {};
      service.deleteProgress(progressToBeDeleted).subscribe(
        response => {
          expect(response).toEqual({});
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/' + progressToBeDeleted.id + '/');
      expect(req.request.method).toEqual('DELETE');

      req.flush(response);
    });
  });

  describe('getProgressesByStandupId', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should get all progresses from backend', () => {
      const standupId = 5;
      const progress1 = {
        accomplished: 'Finished LoginService',
        working_on: 'ProgressService',
        blocker: 'Learning to test stuff'
      };
      const response = [progress1, progress1];
      service.getProgressesByStandupId(standupId).subscribe(
        response => {
          expect(response[0]).toEqual(progress1);
          expect(response.length).toEqual(2);
        });
      const req = httpTestingController.expectOne(service.baseurl + '/progress/?standupId=' + standupId);
      expect(req.request.method).toEqual('GET');

      req.flush(response);
    });
  });

});
