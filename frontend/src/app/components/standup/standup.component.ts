import { Component, OnInit } from '@angular/core';
import { StandupService } from '../../services/standup.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-standup',
  templateUrl: 'standup.component.html',
  styles: [],
})


export class StandupComponent {
  title: 'Stand Ups';
  user;
  userId = 1; // Front does not have current user reference, so this is a hardcoded userId for now
  standups;
  selectedStandup = {date: ''};

  constructor(private standupService: StandupService, private userService: UserService) {
    this.getUser();
    this.getStandups();
  }

  getUser = () => { // This should probably be in a not yet created UserComponent
    this.userService.getUser(this.userId).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getStandups = () => {
    this.standupService.getStandups(this.userId).subscribe(
      data => {
        this.standups = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  standupClicked = (standup) => {
    this.standupService.getOneStandup(standup.id).subscribe(
      data => {
        this.selectedStandup = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateStandup() {
    this.standupService.updateStandup(this.selectedStandup).subscribe(
      data => {
        this.getStandups();
      },
      error => {
        console.log(error);
      }
    );
  }

  createStandup = () => {
    const newStandup = {
      user: [this.userId]
    };
    console.log(newStandup);
    this.standupService.createStandup(newStandup).subscribe(
      data => {
        this.getStandups();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteStandup() {
    if (confirm('Are you sure to delete this Stand Up?')) {
      this.standupService.deleteStandup(this.selectedStandup).subscribe(
        data => {
          this.getStandups();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
