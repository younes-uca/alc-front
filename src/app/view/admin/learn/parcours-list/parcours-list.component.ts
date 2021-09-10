import {Component, OnInit} from '@angular/core';
import {ParcoursService} from '../../../../controller/service/parcours.service';

import {Section} from '../../../../controller/model/section.model';
import {Cours} from '../../../../controller/model/cours.model';
import {Centre} from '../../../../controller/model/centre.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Parcours} from '../../../../controller/model/parcours.model';


@Component({
    selector: 'app-parcours-list',
    templateUrl: './parcours-list.component.html',
    styleUrls: ['./parcours-list.component.scss']
})
export class ParcoursListComponent implements OnInit {
    cols: any[];

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
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

    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    get itemsparcours(): Array<Parcours> {
        return this.service.itemsparcours;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemsparcours(value: Array<Parcours>) {
        this.service.itemsparcours = value;
    }

    get selectesparcours(): Array<Parcours> {
        return this.service.selectesparcours;
    }

    set selectesparcours(value: Array<Parcours>) {
        this.service.selectesparcours = value;
    }

    get itemscentre(): Array<Centre> {
        return this.service.itemscentre;
    }

    get selectedparcours(): Parcours {
        return this.service.selectedparcours;
    }

    set selectedparcours(value: Parcours) {
        this.service.selectedparcours = value;
    }

    get selecteddparcours(): Parcours {
        return this.service.selecteddparcours;
    }

    set selecteddparcours(value: Parcours) {
        this.service.selecteddparcours = value;
    }

    get itemscours(): Array<Cours> {
        return this.service.itemscours;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemscours(value: Array<Cours>) {
        this.service.itemscours = value;
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.init().subscribe(data => this.itemsparcours = data);
    }

    public openCreateParcours() {

        this.submitted = false;
        this.createDialog = true;
        this.selecteddparcours = new Parcours();
    }

    public editParcours(parcour: Parcours) {
        this.selectedparcours = {...parcour};
        this.editDialog = true;
    }

    public deleteCours() {
        this.service.deleteCours();
    }

    public save(): void {
        this.service.save();
    }

    public delete(parcour: Parcours) {
        this.selectedparcours = parcour;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + parcour.libelle + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteParcours().subscribe(data => {
                    this.itemsparcours = this.itemsparcours.filter(val => val.id !== this.selectedparcours.id);
                    this.selectedparcours = new Parcours();
                    this.itemscours = null;
                    this.itemssection = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Parcours Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public FindCours(parcour: Parcours) {
        this.selectedparcours = parcour;
        this.service.afficheCours().subscribe(
            data => {
                this.itemscours = data;
                this.itemssection = null;
            });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected parcours?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleParcoursByid().subscribe(
                    data => {
                        this.service.deleteMultipleParcoursIndexById();
                        this.selectesparcours = null;
                        this.itemscours = null;
                        this.itemssection = null;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Parcours Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'description', header: 'Description'},
            {field: 'datePublication', header: 'DatePublication'},
            {field: 'dateCreation', header: 'DateCreation'},
            {field: 'numeroOrder', header: 'NumeroOrder'},
            {field: 'nombreCours', header: 'NombreCours'},
            {field: 'coursList', header: 'CoursList'},
            {field: 'centre', header: 'Centre'}
        ];
    }

}
