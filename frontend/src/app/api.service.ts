import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllProgresses(): Observable<any> {
    return this.http.get(this.baseurl + '/progress/',
    {headers: this.httpHeaders});
  }

  getOneProgress(id): Observable<any> {
    return this.http.get(this.baseurl + '/progress/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateProgress(progress) {
    return this.http.put(this.baseurl + '/progress/' + progress.id + '/', progress,
      {headers: this.httpHeaders});
  }

  createProgress(progress) {
    return this.http.post(this.baseurl + '/progress/', progress,
      {headers: this.httpHeaders});
  }

  deleteProgress(progress) {
      return this.http.delete(this.baseurl + '/progress/' + progress.id + '/',
      {headers: this.httpHeaders});
  }
  getAllStandups(): Observable<any> {
    return this.http.get(this.baseurl + '/standup/',
    {headers: this.httpHeaders});
  }

  getOneStandup(id): Observable<any> {
    return this.http.get(this.baseurl + '/standup/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateStandup(standup) {
    return this.http.put(this.baseurl + '/standup/' + standup.id + '/', standup,
      {headers: this.httpHeaders});
  }

  createStandup(standup) {
    return this.http.post(this.baseurl + '/standup/', standup,
      {headers: this.httpHeaders});
  }

  deleteStandup(standup) {
      return this.http.delete(this.baseurl + '/standup/' + standup.id + '/',
      {headers: this.httpHeaders});
  }
}
