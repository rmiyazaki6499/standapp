import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'StandApp';
  progresses = [{accomplished: 'Initial Setup of StandApp project'}, {accomplished: 'Second Entry'}]

  constructor(private api: ApiService) {
    this.getProgresses();
  }
  getProgresses = () => {
    this.api.getAllProgresses().subscribe(
      data => {
        this.progresses = data;
      },
      error => {
        console.log(error)
      }
    )
  }
}
