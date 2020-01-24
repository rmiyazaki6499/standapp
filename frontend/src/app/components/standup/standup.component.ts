import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { StandupService } from '../../services/standup.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-standup',
  templateUrl: './standup.component.html',
  styleUrls: ['./standup.component.scss']
})
export class StandupComponent implements OnInit {
  standupId;
  standup;
  progresses;

  newUsername;
  newUser;
  message;

  constructor(
    private readonly route: ActivatedRoute,
    private standupService: StandupService,
    private progressService: ProgressService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.standupId = params.get('standupId');
    });

    this.getStandup(this.standupId);

  }

  getStandup = (standupId) => {
    this.standupService.getOneStandup(standupId).subscribe(
      data => {
        this.standup = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addUserToStandup = () => {
    this.message = null;
    this.userService.getUserByUsername(this.newUsername).subscribe(
      data => {
        this.newUser = data;
        this.standup.user.push(this.newUser.id);
        this.standupService.updateStandup(this.standup).subscribe(
          data => {
            this.standup = data;
          },
          error => {
            this.message = 'Unexpected error';
          }
        );
        this.message = 'Username ' + this.newUsername + ' has been added Successfully!';
        this.newUsername = null;
      },
      error => {
        this.message = 'Username ' + this.newUsername + ' does not exist';
      }
    );
  }
}
