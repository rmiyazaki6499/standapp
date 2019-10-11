import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'http://127.0.0.1:8000';

  isLogedin(): boolean {
    console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token') !== null;
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/rest-auth/login/', userData);
  }

  logoutUser() {
    alert('You are logged out!');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    window.location.href = '/login';
  }
}
