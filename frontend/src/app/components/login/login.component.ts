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
      passowrd: '',
    };
  }
  onRegister() {
    this.LoginService.registerNewUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' created!');
      },
      error => {
        console.log('error', error);
      }
    );
  }
  onLogin() {
    this.LoginService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' created!');
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
