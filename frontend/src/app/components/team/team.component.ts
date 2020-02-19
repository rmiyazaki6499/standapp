import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit, AfterViewInit {
  @Input() teamId: string;
  team;
  breadcrumbs: Object;
  newUsername;
  newUser;
  message;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private readonly route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamId = params.get('teamId');
    });
    this.getTeam(this.teamId);
  }

  ngAfterViewInit() {
    this.breadcrumbsService.currentBreadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs)
    this.breadcrumbs['currentPath'] = 'team'
    this.breadcrumbs['teamId'] = this.teamId
    this.breadcrumbs['teamName'] = this.team.team_name
    console.log(this.team)
  }

  getTeam(teamId) {
    this.teamService.getOneTeam(teamId).subscribe(
      data => {
        this.team = data;
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

  addUserToTeam() {
    this.message = null;
    this.userService.getUserByUsername(this.newUsername).subscribe(
      data => {
        this.newUser = data;
        this.team.users.push(this.newUser.id);
        this.teamService.updateTeam(this.team).subscribe(
          data => {
            this.team = data;
          },
          error => {
            this.message = 'Unexpected error';
          }
        );
        this.message = 'Username ' + this.newUsername + ' has been added Successfully!';
        this.newUsername = null;
      },
      error => {
        this.message = 'Username ' + this.newUsername + ' does not exist';
      }
    );
  }

}
