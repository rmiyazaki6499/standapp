import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  providers: [LoginComponent]
})
export class LoginComponent implements OnInit {
  input;

  constructor(private LoginService: LoginService) {

  }

  ngOnInit() {
    this.input = {
      username: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    this.LoginService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' is logged in!'),
        sessionStorage.setItem('token', response.key);
        window.location.href = "/"
      },
      error => {
        console.log('error', error);
      }
    );
  }
  onLogout() {
    this.LoginService.logoutUser(this.input).subscribe(
      response => {
        alert('You are logged out!'),
        sessionStorage.removeItem('token');
        window.location.href = "/login";
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
