import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) {
  }

  baseurl = environment.serverUrl;

  isLoggedin(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/rest-auth/login/', userData);
  }

  logoutUser() {
    sessionStorage.clear();
    this.toastr.success('You are logged out!');
    window.location.href = '/login';
  }
}
