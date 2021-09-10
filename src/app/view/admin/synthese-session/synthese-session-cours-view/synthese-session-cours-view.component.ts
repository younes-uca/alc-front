import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SyntheseSessionCoursService} from '../../../../controller/service/synthese-session-cours.service';
import {SyntheseSessionCours} from '../../../../controller/model/synthese-session-cours.model';

@Component({
    selector: 'app-synthese-session-cours-view',
    templateUrl: './synthese-session-cours-view.component.html',
    styleUrls: ['./synthese-session-cours-view.component.scss']
})
export class SyntheseSessionCoursViewComponent implements OnInit {


    constructor(private messageService: MessageService, private service: SyntheseSessionCoursService) {
    }

    get selected(): SyntheseSessionCours {
        return this.service.selected;
    }

    set selected(value: SyntheseSessionCours) {
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
