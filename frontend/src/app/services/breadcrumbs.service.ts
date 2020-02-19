import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbsService {

  private breadcrumbsSource = new BehaviorSubject(
    {
      "currentPath": "Home"
    }
  );
  currentBreadcrumbs = this.breadcrumbsSource.asObservable();

  constructor() { }

  changeBreadcrumbs(breadcrumbs: any) {
    this.breadcrumbsSource.next(breadcrumbs)
  }

}