import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';

@Component({
    selector: 'app-recommend',
    templateUrl: './recommend.component.html',
    styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: RecommendTeacherService) {
    }

    ngOnInit(): void {
    }
}
