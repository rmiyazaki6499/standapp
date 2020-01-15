import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progress-list',
    templateUrl: './progress-list.component.html',
    styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {
    @Input() standupId: number;
    constructor() { }

    ngOnInit() {
    }

}
