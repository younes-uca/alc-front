import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

import {EtudiantService} from '../../../../controller/service/etudiant.service';

import {Etudiant} from '../../../../controller/model/etudiant.model';

@Component({
    selector: 'app-etudiantss-view',
    templateUrl: './etudiantss-view.component.html',
    styleUrls: ['./etudiantss-view.component.scss']
})
export class EtudiantssViewComponent implements OnInit {

    constructor(private messageService: MessageService, private service: EtudiantService) {
    }

    get selected(): Etudiant {
        return this.service.selected;
    }

    set selected(value: Etudiant) {
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
