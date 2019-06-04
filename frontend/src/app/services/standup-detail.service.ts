import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandupDetailService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token " + sessionStorage.getItem("token")});

  constructor(private http: HttpClient) { }

  getStandupDetail(standupId): Observable<any> {
    return this.http.get(this.baseurl + '/standup/?standupId=' + standupId,
    {headers: this.httpHeaders});
  }
}