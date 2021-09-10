import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SyntheseSessionCoursService} from '../../../../controller/service/synthese-session-cours.service';
import {SyntheseSessionCours} from '../../../../controller/model/synthese-session-cours.model';

@Component({
    selector: 'app-synthese-session-cours-edit',
    templateUrl: './synthese-session-cours-edit.component.html',
    styleUrls: ['./synthese-session-cours-edit.component.scss']
})
export class SyntheseSessionCoursEditComponent implements OnInit {


    constructor(private messageService: MessageService, private service: SyntheseSessionCoursService) {
    }

    get selected(): SyntheseSessionCours {
        return this.service.selected;
    }

    set selected(value: SyntheseSessionCours) {
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

    get items(): Array<SyntheseSessionCours> {
        return this.service.items;
    }

    set items(value: Array<SyntheseSessionCours>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public edit() {
        this.submitted = true;
        if (this.selected.reference.trim()) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Synthes-Sesseion-Cours Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new SyntheseSessionCours();
        }
    }

    public hideEditDialog() {
        this.editDialog = false;
    }
}
