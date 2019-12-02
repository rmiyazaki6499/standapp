import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  username;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedin();
    this.username = sessionStorage.getItem('username');
  }

  onLogout() {
    sessionStorage.clear();
    this.toastr.success('You are logged out!');
  }

}
