import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SessionCoursService} from '../../../controller/service/session-cours.service';
import {SessionCours} from '../../../controller/model/session-cours.model';
import {Prof} from '../../../controller/model/prof.model';
import {Etudiant} from '../../../controller/model/etudiant.model';

@Component({
    selector: 'app-session-cours-edit',
    templateUrl: './session-cours-edit.component.html',
    styleUrls: ['./session-cours-edit.component.scss']
})
export class SessionCoursEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: SessionCoursService) {
    }

    get itemsProf(): Array<Prof> {
        return this.service.itemsProf;
    }

    set itemsProf(value: Array<Prof>) {
        this.service.itemsProf = value;
    }

    get itemsEtudiant(): Array<Etudiant> {
        return this.service.itemsEtudiant;
    }

    set itemsEtudiant(value: Array<Etudiant>) {
        this.service.itemsEtudiant = value;
    }

    get selected(): SessionCours {
        return this.service.selected;
    }

    set selected(value: SessionCours) {
        this.service.selected = value;
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

    get items(): Array<SessionCours> {
        return this.service.items;
    }

    set items(value: Array<SessionCours>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public findAllProf() {
        this.service.findAllProf().subscribe(data => this.itemsProf = data);
    }

    public findAllEtudiant() {
        this.service.findAllEtudiant().subscribe(data => this.itemsEtudiant = data);
    }

    public edit() {
        this.submitted = true;

        if (this.selected.id) {
            this.items[this.service.findIndexById(this.selected.id)] = this.selected;
            this.service.edit().subscribe(data => {
                this.selected = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Session Updated',
                    life: 3000
                });
            });
        }
        this.editDialog = false;
        this.selected = new SessionCours();
    }

    public hideEditDialog() {
        this.editDialog = false;
    }

}
