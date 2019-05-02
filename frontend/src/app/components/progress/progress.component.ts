import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-progress',
  templateUrl: 'progress.component.html',
  styleUrls: [],
})


export class ProgressComponent {
  progresses;
  selectedProgress = {accomplished: '', working_on: '', blocker: ''};
  // = [{accomplished: 'test', working_on: 'test', blocker: 'test'}];

  constructor(private api: ApiService) {
    this.getProgresses();
  }
  getProgresses = () => {
    this.api.getAllProgresses().subscribe(
      data => {
        this.progresses = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  progressClicked = (progress) => {
    console.log(progress.id);
    this.api.getOneProgress(progress.id).subscribe(
      data => {
        console.log(data);
        this.selectedProgress = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  updateProgress() {
    this.api.updateProgress(this.selectedProgress).subscribe(
      data => {
        this.getProgresses();
      },
      error => {
        console.log(error);
      }
    );
  }

  createProgress() {
    this.api.createProgress(this.selectedProgress).subscribe(
      data => {
        this.getProgresses();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProgress() {
    if(confirm('Are you sure to delete this progress?')) {
      this.api.deleteProgress(this.selectedProgress).subscribe(
        data => {
          this.getProgresses();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
