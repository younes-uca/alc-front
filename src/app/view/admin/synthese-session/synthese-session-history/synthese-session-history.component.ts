import {Component, OnInit} from '@angular/core';
import {City} from '../../../../controller/model/city.model';


@Component({
    selector: 'app-synthese-session-history',
    templateUrl: './synthese-session-history.component.html',
    styleUrls: ['./synthese-session-history.component.scss']
})


export class SyntheseSessionHistoryComponent implements OnInit {

    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            {name: 'New York eeeeeeeeeeeeeeeeeeeeeeeeeeeee', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    ngOnInit(): void {
    }

}
