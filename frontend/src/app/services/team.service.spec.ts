import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TeamService]
  });
  service = TestBed.get(TeamService)
});

it('should be created', () => {
  expect(service).toBeTruthy();
});

describe('getAllTeams', () => {
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should get all teams from backend', () => {
    const team1 = {
      team_name: 'Test Team',
    }
    const team2 = {
      team_name: 'Test Team 2'
    }
    const response = [team1, team2];
    service.getAllTeams().subscribe(
      response => {
        expect(response[0]).toEqual(team1);
        expect(response.length).toEqual(2);
      });
    const req = httpTestingController.expectOne(service.baseurl + '/teams/');
    expect(req.request.method).toEqual('GET');

    req.flush(response);
  });
});

describe('getOneTeam', () => {
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should get one team from backend', () => {
    const id = 6
    const team1 = {
      team_name: 'Test Team One'
    }
    const response = {
      progresses: team1
    };
    service.getOneTeam(id).subscribe(
      response => {
        expect(response.progresses).toEqual(team1);
      });
    const req = httpTestingController.expectOne(service.baseurl + '/teams/' + id + '/');
    expect(req.request.method).toEqual('GET');

    req.flush(response);
  });
});

describe('updateTeam', () => {
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should update one team from backend', () => {
    const team1 = {
      team_name: 'Test Team Draychee',
      id: 4
    }
    const response = team1;
    service.updateTeam(team1).subscribe(
      response => {
        expect(response).toEqual(team1);
      });
    const req = httpTestingController.expectOne(service.baseurl + '/teams/' + team1.id + '/', team1.toString());
    expect(req.request.method).toEqual('PUT');

    req.flush(response);
  });
});

describe('createTeam', () => {
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should create one new progresses from backend', () => {
    const teamFromUser = {
      team_name: 'Team Create'
    }
    const teamCreatedFromBackend = {
      team_name: 'Team Create',
      id: 2
    }
    const response = teamCreatedFromBackend;
    service.createTeam(teamFromUser).subscribe(
      response => {
        expect(response).toEqual(teamCreatedFromBackend);
      });
    const req = httpTestingController.expectOne(service.baseurl + '/teams/', teamFromUser.toString());
    expect(req.request.method).toEqual('POST');

    req.flush(response);
  });
});

describe('deleteTeam', () => {
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should delete one team from backend', () => {
    const teamToBeDeleted = {
      team_name: 'Team Delete',
      id: 2
    }
    const response = {};
    service.deleteTeam(teamToBeDeleted).subscribe(
      response => {
        expect(response).toEqual({});
      });
    const req = httpTestingController.expectOne(service.baseurl + '/teams/' + teamToBeDeleted.id + '/');
    expect(req.request.method).toEqual('DELETE');

    req.flush(response);
  });
});

});
