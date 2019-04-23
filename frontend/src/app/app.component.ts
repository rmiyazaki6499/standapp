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
  progresses = [{accomplished: 'test', working_on: 'test', blocker: 'test'}];

  constructor(private api: ApiService) {
    this.getProgresses();
  }
  getProgresses = () => {
    console.log('getProgresses');
      // this.progresses = [{accomplished: 'Test'}, {accomplished: 'Entry'}];

    this.api.getAllProgresses().subscribe(
      data => {
        this.progresses = data.results;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
