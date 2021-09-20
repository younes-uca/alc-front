import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EtudiantService} from '../../../controller/service/etudiant.service';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {EtudiantVo} from '../../../controller/model/etudiant-vo.model';


@Component({
    selector: 'app-etudiant-list',
    templateUrl: './etudiant-list.component.html',
    styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: EtudiantService) {
    }

    get selected(): Etudiant {
        return this.service.selected;
    }

    set selected(value: Etudiant) {
        this.service.selected = value;
    }

    get items(): Array<Etudiant> {
        return this.service.items;
    }

    set items(value: Array<Etudiant>) {
        this.service.items = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get createDialogEtud(): boolean {
        return this.service.createDialog;
    }

    set createDialogEtud(value: boolean) {
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

    get selectes(): Array<Etudiant> {
        return this.service.selectes;
    }

    set selectes(value: Array<Etudiant>) {
        this.service.selectes = value;
    }

    get etudiantVo(): EtudiantVo {
        return this.service.etudiantVo;
    }

    set etudiantVo(value: EtudiantVo) {
        this.service.etudiantVo = value;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Etudiant) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.nom + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByNom().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Etudiant();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Etudiant Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected quizs?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByNom().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Etudiants Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreateEtud() {
        this.selected = new Etudiant();
        this.submitted = false;
        this.createDialogEtud = true;
    }

    public edit(etudiant: Etudiant) {
        this.selected = {...etudiant};
        this.editDialog = true;
    }

    public view(etudiant: Etudiant) {
        this.selected = {...etudiant};
        this.viewDialog = true;
    }

    public findByCriteria() {
        return this.service.findByCriteria();
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'reference', header: 'Reference'},
            {field: 'total', header: 'Total'},
            {field: 'totalPaye', header: 'Total Paye'}
        ];
    }

// search
}
