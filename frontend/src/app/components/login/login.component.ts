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
      passowrd: '',
    };
  }
  onLogin() {
    this.LoginService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' logged in!');
      },
      error => {
        console.log('error', error);
      }
    );
  }
  onLogout() {
    this.LoginService.logoutUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' logged out!');
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
