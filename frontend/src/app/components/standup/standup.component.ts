import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-standup',
  templateUrl: 'standup.component.html',
  styles: [],
})


export class StandupComponent {
  title: 'Stand Ups';
  standups;
  selectedStandup = {date: ''};

  constructor(private api: ApiService) {
    this.getStandups();
  }
  getStandups = () => {
    this.api.getAllStandups().subscribe(
      data => {
        this.standups = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  standupClicked = (standup) => {
    console.log(standup.id);
    this.api.getOneStandup(standup.id).subscribe(
      data => {
        console.log(data);
        this.selectedStandup = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  updateStandup() {
    this.api.updateStandup(this.selectedStandup).subscribe(
      data => {
        this.getStandups();
      },
      error => {
        console.log(error);
      }
    );
  }

  createStandup() {
    this.api.createStandup(this.selectedStandup).subscribe(
      data => {
        this.getStandups();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteStandup() {
    if(confirm('Are you sure to delete this Stand Up?')) {
      this.api.deleteStandup(this.selectedStandup).subscribe(
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
