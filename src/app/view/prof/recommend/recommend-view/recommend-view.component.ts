import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RecommendTeacherService} from '../../../../controller/service/recommend-teacher.service';
import {RecommendTeacher} from '../../../../controller/model/recommend-teacher.model';

@Component({
    selector: 'app-recommend-view',
    templateUrl: './recommend-view.component.html',
    styleUrls: ['./recommend-view.component.scss']
})
export class RecommendViewComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: RecommendTeacherService) {
    }

    get selected(): RecommendTeacher {
        return this.service.selected;
    }

    set selected(value: RecommendTeacher) {
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
