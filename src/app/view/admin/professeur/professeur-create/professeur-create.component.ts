import {Component, OnInit} from '@angular/core';
import {Prof} from '../../../../controller/model/prof.model';
import {MessageService} from 'primeng/api';
import {ProfessorService} from '../../../../controller/service/professor.service';

@Component({
    selector: 'app-professeur-create',
    templateUrl: './professeur-create.component.html',
    styleUrls: ['./professeur-create.component.scss']
})
export class ProfesseurCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: ProfessorService) {
    }

    get selected(): Prof {
        return this.service.selected;
    }

    set selected(value: Prof) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Prof> {
        return this.service.items;
    }

    set items(value: Array<Prof>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        this.selected.categorieProf.id = 1;
        this.service.save().subscribe(data => {
            this.items.push({...data});
            // tslint:disable-next-line:no-shadowed-variable
            this.service.findAll().subscribe(data => this.items = data);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'prof Created',
                life: 3000
            });
        });
        this.createDialog = false;
        this.selected = new Prof();
    }


}
