import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userId: number;
  user;

  constructor(
    private readonly route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserById(this.userId);
  }

  getUserById = (userId) => {
    this.userService.getUserById(userId).subscribe(
      data => {
        this.user = data
      },
      error => {
        console.log(error);
      }
    )
  }

}
