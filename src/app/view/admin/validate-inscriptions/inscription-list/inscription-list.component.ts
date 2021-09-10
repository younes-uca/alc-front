import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {InscriptionService} from '../../../../controller/service/inscription.service';

import {Inscription} from '../../../../controller/model/inscription.model';
import {EtatInscription} from '../../../../controller/model/etat-inscription.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {EtudiantVo} from '../../../../controller/model/etudiant-vo.model';

@Component({
    selector: 'app-inscription-list',
    templateUrl: './inscription-list.component.html',
    styleUrls: ['./inscription-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class InscriptionListComponent implements OnInit {
    cols: any[];
    index: number;

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: InscriptionService) {
    }

    get valideDialog(): boolean {
        return this.service.valideDialog;
    }

    set valideDialog(value: boolean) {
        this.service.valideDialog = value;
    }

    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get items(): Array<Inscription> {
        return this.service.items;
    }

    set items(value: Array<Inscription>) {
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

    get selectes(): Array<Inscription> {
        return this.service.selectes;
    }

    set selectes(value: Array<Inscription>) {
        this.service.selectes = value;
    }

    get etatInscription(): EtatInscription {
        return this.service.etatInscription;
    }

    set etatInscription(value: EtatInscription) {
        this.service.etatInscription = value;
    }

    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }

    get etudiantVo(): EtudiantVo {
        return this.service.etudiantVo;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Inscription) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.nom + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByNumeroInscription().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Inscription();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Inscription Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public findByCriteria() {
        return this.service.findByCriteria().subscribe(data => this.items = data);
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected inscription?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByNumeroInscription().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Commandes Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new Inscription();
        this.submitted = false;
        this.createDialog = true;
    }

    public openValide() {
        this.selected = new Inscription();
        this.submitted = false;
        this.valideDialog = true;
    }

    public edit(inscriptions: Inscription) {
        this.selected = {...inscriptions};
        this.editDialog = true;
    }

    public view(inscription: Inscription) {
        this.selected = {...inscription};
        this.viewDialog = true;
    }

    public update(index: number, inscription: Inscription) {
        this.service.update(index, inscription);
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'numeroInscription', header: 'NumeroInscription'},
            {field: 'datedebutinscription', header: 'Datedebutinscription'},
            {field: 'datefininscription', header: 'Datefininscription'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'prof', header: 'Prof'},
            {field: 'etatInscription', header: 'EtatInscription'}
        ];
    }

}
