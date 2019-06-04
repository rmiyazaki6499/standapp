import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { StandupService } from '../../services/standup.service';



@Component({
  selector: 'app-standup-detail',
  templateUrl: './standup-detail.component.html',
  styleUrls: ['./standup-detail.component.scss']
})
export class StandupDetailComponent implements OnInit {
  standupId;
  standup;
  progresses;
  selectedProgress;

  constructor(
        private readonly route: ActivatedRoute,
        private standupService: StandupService,
        private progressService: ProgressService
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
      this.standupId = params.get('standupId');
    });

   this.getStandup(this.standupId);
   this.getStandupDetail(this.standupId);
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
