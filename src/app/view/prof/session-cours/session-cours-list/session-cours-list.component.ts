import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {SessionCoursService} from '../../../../controller/service/session-cours.service';
import {SessionCours} from '../../../../controller/model/session-cours.model';
import {ProfessorService} from '../../../../controller/service/professor.service';

@Component({
    selector: 'app-session-cours-list',
    templateUrl: './session-cours-list.component.html',
    styleUrls: ['./session-cours-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class SessionCoursListComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: SessionCoursService, private serviceprof: ProfessorService) {
    }

    get viewDialogProf(): boolean {
        return this.serviceprof.viewDialogProf;
    }

    set viewDialogProf(value: boolean) {
        this.serviceprof.viewDialogProf = value;
    }

    get itemsSession(): Array<SessionCours> {
        return this.serviceprof.itemsSession;
    }

    set itemsSession(value: Array<SessionCours>) {
        this.serviceprof.itemsSession = value;
    }

    get selected(): SessionCours {
        return this.service.selected;
    }

    set selected(value: SessionCours) {
        this.service.selected = value;
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

    get selectes(): Array<SessionCours> {
        return this.service.selectes;
    }

    set selectes(value: Array<SessionCours>) {
        this.service.selectes = value;
    }

    ngOnInit(): void {
        this.initCol();
    }

    public hideViewDialog() {
        this.viewDialogProf = false;
    }

    public findByCriteria() {
        return this.service.findByCriteria().subscribe(data => this.itemsSession = data);
    }

    public delete(selected: SessionCours) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.reference + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.itemsSession = this.itemsSession.filter(val => val.id !== this.selected.id);
                    this.selected = new SessionCours();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Session Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Sessions?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByReference().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Sessions Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new SessionCours();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(sessionCours: SessionCours) {
        this.selected = {...sessionCours};
        this.editDialog = true;
    }

    public view(sessionCours: SessionCours) {
        this.selected = {...sessionCours};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'reference', header: 'Reference'},
            {field: 'prof', header: 'Professor'},
            {field: 'etudiant', header: 'Student'},
            {field: 'dateDebut', header: 'Start at'},
            {field: 'dateFin', header: 'Finish at'},
            {field: 'duree', header: 'Duration'},

        ];
    }


}
