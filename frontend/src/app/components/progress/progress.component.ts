import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-progress',
  template: `
  <div style="text-align:center">
  <h1>{{ title }}!
</h1>
</div>
<h2>List of Progress Accomplishments:</h2>
<ul>
  <li *ngFor="let progress of progresses">
<!--    <h2>id: {{ progress.id }}</h2>-->
    <div (click)="progressClicked(progress)">
      <h2>Accomplished: {{ progress.accomplished }}</h2>
      <h2>Working On: {{ progress.working_on }}</h2>
      <h2>Blockers: {{ progress.blocker }}</h2>
  <!--    <h2>User: {{ progress.user }}</h2>-->
  <!--    <h2>Standup: {{ progress.standup }}</h2>-->
    </div>
  </li>
</ul>


<hr>
Accomplished <input [(ngModel)]="selectedProgress.accomplished"><br/>
Working On <input [(ngModel)]="selectedProgress.working_on"><br/>
Blocker <input [(ngModel)]="selectedProgress.blocker"><br/>
<button *ngIf="selectedProgress.id" (click)="updateProgress()">UPDATE</button>
<button (click)="createProgress()">CREATE</button>
<button *ngIf="selectedProgress.id" (click)="deleteProgress()">DELETE</button>
`,
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
