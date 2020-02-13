import {Component, OnInit} from '@angular/core';
import {ProgressService} from '../../services/progress.service';


@Component({
  selector: 'app-progress',
  templateUrl: 'progress.component.html',
  styleUrls: ['progress.component.scss'],
})


export class ProgressComponent {
  progresses;
  selectedProgress = {accomplished: '', working_on: '', blocker: ''};

  constructor(private progressService: ProgressService) {
    this.getProgresses();
  }

  getProgresses = () => {
    this.progressService.getAllProgresses().subscribe(
      data => {
        this.progresses = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  progressClicked = (progress) => {
    this.progressService.getOneProgress(progress.id).subscribe(
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
        this.getProgresses();
      },
      error => {
        console.log(error);
      }
    );
  }

  createProgress() {
    this.progressService.createProgress(this.selectedProgress).subscribe(
      data => {
        this.getProgresses();
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
          this.getProgresses();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
