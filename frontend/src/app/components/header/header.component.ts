import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  username: string;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private routerUrl: Router
  ) {
  }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedin();
    this.username = this.userService.getUsername();
  }

  logoutUser() {
    this.loginService.logoutUser();
    this.loggedIn = this.loginService.isLoggedin();
  }

}
