import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-standup',
  template: `
<section class="hero is-info">
  <div style="text-align:center">
  <h1>{{ title }}!</h1>
<h2>List of Stand Ups:</h2>
</div>

<div class="container">
<div class="columns is-multiline">

<div class="column is-4" *ngFor="let standup of standups">
    <div class="card">
      <div class="card-content">
        <div (click)="standupClicked(standup)">
    {{ standup.date }}
        </div>
      </div>
    </div>
</div>

</div>
</div>

<hr>
Date <input [(ngModel)]="selectedStandup.date"><br/>
<button class="button is-danger is-large" *ngIf="selectedStandup.id" (click)="updateStandup()">Update</button>
<button class="button is-danger is-large" (click)="createStandup()">Create</button>
<button class="button is-danger is-large" *ngIf="selectedStandup.id" (click)="deleteStandup()">Delete</button>
</section>
`,
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
