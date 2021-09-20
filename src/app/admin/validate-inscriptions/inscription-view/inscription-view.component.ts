import {Component, OnInit} from '@angular/core';

import {MessageService} from 'primeng/api';
import {InscriptionService} from '../../../controller/service/inscription.service';
import {Inscription} from '../../../controller/model/inscription.model';

@Component({
    selector: 'app-inscription-view',
    templateUrl: './inscription-view.component.html',
    styleUrls: ['./inscription-view.component.scss']
})
export class InscriptionViewComponent implements OnInit {

    constructor(private messageService: MessageService, private service: InscriptionService) {
    }

    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    ngOnInit(): void {
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

}
