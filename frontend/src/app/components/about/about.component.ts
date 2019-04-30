import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <img src="assets/img/standapp_logo.png">
  <h1>About Us</h1>

    <p>
    Draychee is a Partnership between Andreas Lorentson and Ryuichi Miyazaki. They both met March 19th, 2019 when they started at FastSpring together the same day.
    </p>
    <img src="assets/img/rmiyazaki.jpg">
    <img src="assets/img/aloretson.jpg">

  `,
  styleUrls: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
