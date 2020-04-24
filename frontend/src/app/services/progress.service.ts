import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  baseurl = environment.serverUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token " + sessionStorage.getItem("token")});

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

  getProgressesByStandupId(standupId): Observable<any> {
    return this.http.get(this.baseurl + '/progress/?standupId=' + standupId,
    {headers: this.httpHeaders});
  }
}
