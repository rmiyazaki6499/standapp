import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [LoginComponent]
})
export class LoginComponent implements OnInit {
  input;
  user;

  constructor(
    private LoginService: LoginService,
    private toastr: ToastrService
  ) {
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
        sessionStorage.setItem('token', response.key);
        sessionStorage.setItem('username', this.input.username);
        window.location.href = '/teams';
        this.toastr.success('User ' + this.input.username + ' is logged in!');
      },
      error => {
        this.toastr.error('User ' + this.input.username + ' does not have an account yet!');
      }
    );
  }

}
