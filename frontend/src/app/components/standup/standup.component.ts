import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { StandupService } from '../../services/standup.service';



@Component({
  selector: 'app-standup',
  templateUrl: './standup.component.html',
  styleUrls: ['./standup.component.scss']
})
export class StandupComponent implements OnInit {
  standupId;
  standup;
  progresses;
  teamId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private standupService: StandupService,
    private progressService: ProgressService,
  ) { }

  ngOnInit() {
    this.teamId = sessionStorage.getItem('teamId');
    this.route.paramMap.subscribe(params => {
      this.standupId = params.get('standupId');
    });

    this.getStandup(this.standupId);
  }

  getStandup(standupId) {
    this.standupService.getOneStandup(standupId).subscribe(
      data => {
        this.standup = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
