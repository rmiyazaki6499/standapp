import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandupService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token " + sessionStorage.getItem("token")});

  constructor(private http: HttpClient) { }

  getStandups(userId): Observable<any> {
    return this.http.get(this.baseurl + '/standups/?userId=' + userId,
    {headers: this.httpHeaders});
  }

  getOneStandup(id): Observable<any> {
    return this.http.get(this.baseurl + '/standups/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateStandup(standup) {
    return this.http.put(this.baseurl + '/standups/' + standup.id + '/', standup,
      {headers: this.httpHeaders});
  }

  createStandup(date) {
    return this.http.post(this.baseurl + '/standups/', date,
      {headers: this.httpHeaders});
  }

  deleteStandup(standup) {
      return this.http.delete(this.baseurl + '/standups/' + standup.id + '/',
      {headers: this.httpHeaders});
  }
}
