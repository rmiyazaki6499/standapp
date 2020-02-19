import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})


export class TeamListComponent implements OnInit {
  teams;
  selectedTeam = {team_name: ''};
  breadcrumbs:string;

  constructor(
    private teamService: TeamService,
    private breadcrumbsService: BreadcrumbsService
    ) {
    this.getTeams();
  }

  ngOnInit() {
    this.breadcrumbsService.currentBreadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs)
    this.updateBreadcrumbs()
  }

  updateBreadcrumbs() {
    this.breadcrumbsService.changeBreadcrumbs("Team-List Component")
  }

  getTeams() {
    this.teamService.getAllTeams().subscribe(
      data => {
        this.teams = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  teamClicked(team) {
    this.teamService.getOneTeam(team.id).subscribe(
      data => {
        this.selectedTeam = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  updateTeam() {
    this.teamService.updateTeam(this.selectedTeam).subscribe(
      data => {
        this.getTeams();
      },
      error => {
        console.log(error);
      }
    );
  }

  createTeam() {
    this.teamService.createTeam(this.selectedTeam).subscribe(
      data => {
        this.getTeams();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTeam() {
    if (confirm('Are you sure to delete this team?')) {
      this.teamService.deleteTeam(this.selectedTeam).subscribe(
        data => {
          this.getTeams();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
