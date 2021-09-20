import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {Parcours} from '../../../controller/model/parcours.model';
import {Centre} from '../../../controller/model/centre.model';

@Component({
    selector: 'app-parcours-edit',
    templateUrl: './parcours-edit.component.html',
    styleUrls: ['./parcours-edit.component.scss']
})
export class ParcoursEditComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get selectedparcours(): Parcours {
        return this.service.selectedparcours;
    }

    set selectedparcours(value: Parcours) {
        this.service.selectedparcours = value;
    }

    get itemsparcours(): Array<Parcours> {
        return this.service.itemsparcours;
    }

    set itemsparcours(value: Array<Parcours>) {
        this.service.itemsparcours = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get itemscentre(): Array<Centre> {
        return this.service.itemscentre;
    }

    set itemscentre(value: Array<Centre>) {
        this.service.itemscentre = value;
    }

    ngOnInit(): void {
    }

    public editParcours() {
        this.submitted = true;
        if (this.selectedparcours.id) {
            this.itemsparcours[this.service.findParcoursIndexById(this.selectedparcours.id)] = this.selectedparcours;
            this.service.updateParcours().subscribe(data => {
                this.selectedparcours = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Parcours Updated',
                    life: 3000
                });
            });
        }
        this.editDialog = false;
        this.selectedparcours = new Parcours();

    }

    public hideEditDialog() {
        this.editDialog = false;
    }

    findAllCentre() {
        this.service.findAllCentre().subscribe(data => {
            this.itemscentre = data;
        });
    }
}
