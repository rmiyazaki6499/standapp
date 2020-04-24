import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseurl = environment.serverUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token " + sessionStorage.getItem("token")});

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<any> {
    return this.http.get(this.baseurl + '/teams/',
      {headers: this.httpHeaders});
  }

  getOneTeam(id): Observable<any> {
    return this.http.get(this.baseurl + '/teams/' + id + '/',
      {headers: this.httpHeaders});
  }

  updateTeam(team) {
    return this.http.put(this.baseurl + '/teams/' + team.id + '/', team,
      {headers: this.httpHeaders});
  }

  createTeam(team) {
    return this.http.post(this.baseurl + '/teams/', team,
      {headers: this.httpHeaders});
  }

  deleteTeam(team) {
    return this.http.delete(this.baseurl + '/teams/' + team.id + '/',
      {headers: this.httpHeaders});
  }
}
