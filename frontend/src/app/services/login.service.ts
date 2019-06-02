import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/rest-auth/login/', userData);
  }

  logoutUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/rest-auth/logout/', userData);
  }
}
