import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {RecommendTeacher} from '../../../controller/model/recommend-teacher.model';
import {RecommendTeacherVo} from '../../../controller/model/recommend-teacher-vo.model';
import {LoginService} from '../../../controller/service/login.service';


@Component({
    selector: 'app-recommend-list',
    templateUrl: './recommend-list.component.html',
    styleUrls: ['./recommend-list.component.scss']
})
export class RecommendListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: RecommendTeacherService, private serviceUser: LoginService) {
    }

    get recommendVo(): RecommendTeacherVo {
        return this.service.recommendVo;
    }

    set recommendVo(value: RecommendTeacherVo) {
        this.service.recommendVo = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get selected(): RecommendTeacher {
        return this.service.selected;
    }

    set selected(value: RecommendTeacher) {
        this.service.selected = value;
    }

    get items(): Array<RecommendTeacher> {
        return this.service.items;
    }

    set items(value: Array<RecommendTeacher>) {
        this.service.items = value;
    }

    get selectes(): Array<RecommendTeacher> {
        return this.service.selectes;
    }

    set selectes(value: Array<RecommendTeacher>) {
        this.service.selectes = value;
    }

    ngOnInit(): void {
        this.selected.prof.id = this.serviceUser.prof.id;
        this.service.findAll().subscribe(data => this.items = data);
    }

    public edit(recommendTeacher: RecommendTeacher) {
        this.selected = {...recommendTeacher};
        this.editDialog = true;
    }

    public view(recommendTeacher: RecommendTeacher) {
        this.selected = {...recommendTeacher};
        this.viewDialog = true;
    }

    public findByCriteria() {
        return this.service.findByCriteria().subscribe(
            data => {
                console.log(data);
                this.service.items = data;
            },
        );
    }
}
