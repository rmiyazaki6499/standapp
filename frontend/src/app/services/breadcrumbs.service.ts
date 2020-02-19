import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbsService {

  private breadcrumbsSource = new BehaviorSubject('default message');
  currentBreadcrumbs = this.breadcrumbsSource.asObservable();

  constructor() { }

  changeBreadcrumbs(breadcrumbs: string) {
    this.breadcrumbsSource.next(breadcrumbs)
  }

}