import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  input;

  constructor(private userService: LoginService) {

  }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
      email: '',
    };
  }

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' is logged in!');
      },
      error => console.log(error)
    );
  }

  onRegister() {
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been created!');
      },
      error => console.log(error)
    );
  }
}
