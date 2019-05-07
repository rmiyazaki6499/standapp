import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-standup-detail',
  templateUrl: './standup-detail.component.html',
  styleUrls: ['./standup-detail.component.scss']
})
export class StandupDetailComponent implements OnInit {
  standupId;
  progresses;

  constructor(
        private readonly route: ActivatedRoute,
        private api: ApiService
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
      this.standupId = params.get('standupId');
    });

   this.getStandupDetail(this.standupId);
  }

  getStandupDetail = (standupId) => {
    this.api.getStandupDetail(standupId).subscribe(
      data => {
        this.progresses = data;
      },
      error => {
        console.log(error);
      }
    );
  };

}
