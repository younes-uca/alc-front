import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RecommendTeacherService} from '../../../../controller/service/recommend-teacher.service';
import {RecommendTeacher} from '../../../../controller/model/recommend-teacher.model';

@Component({
    selector: 'app-recommend-edit',
    templateUrl: './recommend-edit.component.html',
    styleUrls: ['./recommend-edit.component.scss']
})
export class RecommendEditComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: RecommendTeacherService) {
    }

    get selected(): RecommendTeacher {
        return this.service.selected;
    }

    set selected(value: RecommendTeacher) {
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

    get items(): Array<RecommendTeacher> {
        return this.service.items;
    }

    set items(value: Array<RecommendTeacher>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public edit() {
        this.submitted = true;
        if (this.selected) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Commande Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new RecommendTeacher();
        }
    }

    public hideEditDialog() {
        this.editDialog = false;
    }


}

