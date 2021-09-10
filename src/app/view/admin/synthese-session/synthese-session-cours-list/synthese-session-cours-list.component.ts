import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {SyntheseSessionCoursService} from '../../../../controller/service/synthese-session-cours.service';
import {SyntheseSessionCours} from '../../../../controller/model/synthese-session-cours.model';
import {City} from '../../../../controller/model/city.model';

@Component({
    selector: 'app-synthese-session-cours-list',
    templateUrl: './synthese-session-cours-list.component.html',
    styleUrls: ['./synthese-session-cours-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class SyntheseSessionCoursListComponent implements OnInit {
    cities: City[];

    selectedCity: City;
    cols: any[];
    public etat = 1;
    public p = 2;
    public j: number = 0;
    public k = 0;
    public c = 0;
    public m = 0;

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: SyntheseSessionCoursService) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    get selected(): SyntheseSessionCours {

        return this.service.selected;
    }

    set selected(value: SyntheseSessionCours) {
        this.service.selected = value;
    }

    get items(): Array<SyntheseSessionCours> {
        return this.service.items;

    }

    set items(value: Array<SyntheseSessionCours>) {
        this.service.items = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get selectes(): Array<SyntheseSessionCours> {
        return this.service.selectes;
    }

    set selectes(value: Array<SyntheseSessionCours>) {
        this.service.selectes = value;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => {
            this.items = data;
            for (let i = 0; i < this.items.length; i++) {
                // tslint:disable-next-line:triple-equals
                if (this.items[i].etatNumber == 1) {
                    console.log(this.j);
                    this.j++;
                    console.log(this.j);
                    // tslint:disable-next-line:triple-equals
                } else if (this.items[i].etatNumber == 2) {
                    this.k++;
                    // tslint:disable-next-line:triple-equals
                } else if (this.items[i].etatNumber == 4) {
                    this.m++;
                } else {
                    this.c++;
                }
            }
        });


    }

    public setetat(nbr: number): number {
        this.etat = nbr;
        return this.etat;
    }

    public delete(selected: SyntheseSessionCours) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.reference + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new SyntheseSessionCours();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Synthese Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected synthese?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByReference().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Synthese Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new SyntheseSessionCours();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(synthese: SyntheseSessionCours) {
        this.selected = {...synthese};
        this.editDialog = true;
    }

    public view(synthese: SyntheseSessionCours) {
        this.selected = {...synthese};
        this.viewDialog = true;
    }

    incrementer(synthese: SyntheseSessionCours) {
        synthese.nbrClass++;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'STUDENtT'},
            {field: 'reference', header: 'SCHEDULE'},
            {field: '', header: 'LAST CLASS'},
            {field: '', header: 'BALANCE'},
            {field: '', header: 'ED CLASS'}
        ];
    }
}
