import {Component, OnInit} from '@angular/core';

import {MessageService} from 'primeng/api';

import {InscriptionService} from '../../../../controller/service/inscription.service';
import {Inscription} from '../../../../controller/model/inscription.model';

@Component({
    selector: 'app-inscription-create',
    templateUrl: './inscription-create.component.html',
    styleUrls: ['./inscription-create.component.scss']
})
export class InscriptionCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: InscriptionService) {
    }

    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Inscription> {
        return this.service.items;
    }

    set items(value: Array<Inscription>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;

        if (this.selected.numeroInscription) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Inscription Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Inscription();
        }
    }

}
