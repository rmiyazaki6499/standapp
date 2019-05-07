import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandupDetailService } from '../../services/standup-detail.service';
import { ProgressService } from '../../services/progress.service';



@Component({
  selector: 'app-standup-detail',
  templateUrl: './standup-detail.component.html',
  styleUrls: ['./standup-detail.component.scss']
})
export class StandupDetailComponent implements OnInit {
  standupId;
  progresses;
  selectedProgress;

  constructor(
        private readonly route: ActivatedRoute,
        private standupDetailService: StandupDetailService,
        private progressService: ProgressService
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
      this.standupId = params.get('standupId');
    });

   this.getStandupDetail(this.standupId);
  }

  getStandupDetail = (standupId) => {
    this.standupDetailService.getStandupDetail(standupId).subscribe(
      data => {
        this.progresses = data;
      },
      error => {
        console.log(error);
      }
    );
  };
  getProgress = (progressId) => {
    this.progressService.getOneProgress(progressId).subscribe(
      data => {
        this.selectedProgress = data;
        console.log(this.selectedProgress);
      },
      error => {
        console.log(error);
      }
    );
  }

}
