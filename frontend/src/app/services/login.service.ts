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

  isLoggedin(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/rest-auth/login/', userData);
  }

  logoutUser() {
    alert('You are logged out!');
    sessionStorage.clear();
    window.location.href = '/login';
  }
}
