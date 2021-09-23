import {Component, OnInit} from '@angular/core';
import {ProfessorService} from '../../../../controller/service/professor.service';
import {MessageService} from 'primeng/api';
import {Prof} from '../../../../controller/model/prof.model';


@Component({
    selector: 'app-professeur-view',
    templateUrl: './professeur-view.component.html',
    styleUrls: ['./professeur-view.component.scss']
})
export class ProfesseurViewComponent implements OnInit {


    constructor(private messageService: MessageService, private service: ProfessorService) {
    }

    get selected(): Prof {
        return this.service.selected;
    }

    set selected(value: Prof) {
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
