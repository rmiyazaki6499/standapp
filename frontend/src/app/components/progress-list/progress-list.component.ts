import { Component, OnInit, Input } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-progress-list',
    templateUrl: './progress-list.component.html',
    styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {
    @Input() standupId: number;
    progresses;
    selectedProgress;
    constructor(
        private progressService: ProgressService,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.getProgressesByStandupId(this.standupId)
        this.selectedProgress = {
            standup: this.standupId,
            accomplished: '',
            working_on: '',
            blocker: ''
          };
    }

    getProgressesByStandupId = (standupId) => {
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
            this.getProgressesByStandupId(this.standupId);
            this.selectedProgress = data;
          },
          error => {
            console.log(error);
          }
        );
      }

      createProgress() {
        console.log(this.selectedProgress);
        if (this.selectedProgress.user == null) {
          this.selectedProgress.user = 1; // TODO should be logged in user
        }
        this.progressService.createProgress(this.selectedProgress).subscribe(
          data => {
            this.getProgressesByStandupId(this.standupId);
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
              this.getProgressesByStandupId(this.standupId);
            },
            error => {
              console.log(error);
            }
          );
        }
      }
}


