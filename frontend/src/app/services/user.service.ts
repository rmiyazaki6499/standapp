import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + sessionStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }

  getUserByUsername(newUsername): Observable<any> {
    return this.http.get(this.baseurl + '/user/?username=' + newUsername,
    {headers: this.httpHeaders});
  }
}
