import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SessionCoursService} from '../../../controller/service/session-cours.service';
import {SessionCours} from '../../../controller/model/session-cours.model';

@Component({
    selector: 'app-session-cours-view',
    templateUrl: './session-cours-view.component.html',
    styleUrls: ['./session-cours-view.component.scss']
})
export class SessionCoursViewComponent implements OnInit {

    constructor(private messageService: MessageService, private service: SessionCoursService) {
    }

    get selected(): SessionCours {
        return this.service.selected;
    }

    set selected(value: SessionCours) {
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
