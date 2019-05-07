import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  input;

  constructor(private userService: ApiService  ) {

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
        alert('User ' + this.input.username + ' is logged in!')
      },
      error => console.log(error)
    );
  }
  onRegister() {
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been created!')
      },
      error => console.log(error)
    );
  }
}
