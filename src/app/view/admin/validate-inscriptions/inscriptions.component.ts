import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
    selector: 'app-inscriptions',
    templateUrl: './inscriptions.component.html',
    styleUrls: ['./inscriptions.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class InscriptionsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
