import { Component, OnInit, Input } from '@angular/core';
import { StandupService } from '../../services/standup.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-standup-list',
  templateUrl: './standup-list.component.html',
  styles: ['./standup-list.component.scss'],
})


export class StandupListComponent implements OnInit {
  @Input() teamId: number;
  @Input() teamUsers: number[];
  title: 'Stand Ups';
  username;
  currentUsername;
  standups;
  selectedStandup = {date: ''};

  constructor(
    private standupService: StandupService,
    private userService: UserService) {
    this.getCurrentUsername();
  }

  ngOnInit() {
    this.getStandupsByTeamId(this.teamId);
  }

  getStandupsByTeamId = (teamId) => {
    this.standupService.getStandupsByTeamId(teamId).subscribe(
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
        this.getStandupsByTeamId(this.teamId);
      },
      error => {
        console.log(error);
      }
    );
  }

  createStandup = () => {
    this.standupService.createStandup({"users":this.teamUsers, 'team': this.teamId}).subscribe(
      data => {
        this.getStandupsByTeamId(this.teamId);
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
          this.getStandupsByTeamId(this.teamId);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getCurrentUsername() {
    this.currentUsername = this.userService.getUsername();
  }
}
