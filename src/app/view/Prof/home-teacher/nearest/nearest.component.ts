import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nearest',
    templateUrl: './nearest.component.html',
    styleUrls: ['./nearest.component.scss']
})
export class NearestComponent implements OnInit {
    lastUpdate = new Date();

    constructor() {
    }

    ngOnInit(): void {
    }

}
