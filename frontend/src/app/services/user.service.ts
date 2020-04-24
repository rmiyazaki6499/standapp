import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = environment.serverUrl;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + sessionStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }

  getUserByUsername(newUsername): Observable<any> {
    return this.http.get(this.baseurl + 'user/?username=' + newUsername,
    {headers: this.httpHeaders});
  }

  getUserById(userId): Observable<any> {
    return this.http.get(this.baseurl + 'user/' + userId,
    {headers: this.httpHeaders});
  }
}
