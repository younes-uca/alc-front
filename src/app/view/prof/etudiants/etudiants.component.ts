import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-etudiants',
    templateUrl: './etudiants.component.html',
    styleUrls: ['./etudiants.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class EtudiantsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
