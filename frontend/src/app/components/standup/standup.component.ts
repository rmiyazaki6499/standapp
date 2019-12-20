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
  selectedProgress;
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
    this.getStandupDetail(this.standupId);
    this.selectedProgress = {
      standup: this.standupId,
      accomplished: '',
      working_on: '',
      blocker: ''
    };
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

  getStandupDetail = (standupId) => {
    this.progressService.getProgressesByStandupId(standupId).subscribe(
      data => {
        this.progresses = data;
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

  getProgress = (progressId) => {
    this.progressService.getOneProgress(progressId).subscribe(
      data => {
        this.selectedProgress = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateProgress() {
    this.progressService.updateProgress(this.selectedProgress).subscribe(
      data => {
        this.getStandupDetail(this.standupId);
        this.selectedProgress = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  createProgress() {
    console.log(this.selectedProgress);
    if (this.selectedProgress.user == null) {
      this.selectedProgress.user = 1; // TODO should be logged in user
    }
    this.progressService.createProgress(this.selectedProgress).subscribe(
      data => {
        this.getStandupDetail(this.standupId);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProgress() {
    if (confirm('Are you sure to delete this progress?')) {
      this.progressService.deleteProgress(this.selectedProgress).subscribe(
        data => {
          this.getStandupDetail(this.standupId);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
