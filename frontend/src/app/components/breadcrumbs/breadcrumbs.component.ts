import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: Object;

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.currentBreadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs)
  }

}
