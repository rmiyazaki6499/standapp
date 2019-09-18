import { Component, OnInit } from '@angular/core';
import { StandupService } from '../../services/standup.service';

@Component({
  selector: 'app-standup',
  templateUrl: 'standup.component.html',
  styles: [],
})


export class StandupComponent {
  title: 'Stand Ups';
  standups;
  selectedStandup = {date: ''};

  constructor(private standupService: StandupService) {
    this.getStandups();
  }
  getStandups = () => {
    const userId = 1; // Front does not have current user reference, so this is a hardcoded userId for now
    this.standupService.getStandups(userId).subscribe(
      data => {
        this.standups = data;
        console.log(data);
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
    this.standupService.createStandup(this.selectedStandup).subscribe(
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
