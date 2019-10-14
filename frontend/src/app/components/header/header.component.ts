import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedin();
  }
}
