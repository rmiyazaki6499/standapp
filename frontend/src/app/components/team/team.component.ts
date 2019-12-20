import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {
  @Input() teamId: string;
  team;

  constructor(
    private teamService: TeamService,
    private readonly route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamId = params.get('teamId');
    });
    this.getTeam(this.teamId);
  }

  getTeam = (teamId) => {
    this.teamService.getOneTeam(teamId).subscribe(
      data => {
        console.log(data)
        this.team = data;
        console.log(this.team)
      },
      error => {
        console.log(error);
      }
    );
  };

  updateTeam() {
    this.teamService.updateTeam(this.team).subscribe(
      data => {
        this.getTeam(this.teamId);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTeam() {
    if (confirm('Are you sure to delete this team?')) {
      this.teamService.deleteTeam(this.team).subscribe(
        data => {
          this.getTeam(this.teamId);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
