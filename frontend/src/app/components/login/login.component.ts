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
  user;

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
        sessionStorage.setItem('username', this.input.username);
        window.location.href = '/';
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
