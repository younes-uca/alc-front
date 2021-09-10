import {Component, OnInit} from '@angular/core';
import {RecommendTeacher} from '../../../controller/model/recommend-teacher.model';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {RecommendTeacherVo} from '../../../controller/model/recommend-teacher-vo.model';

@Component({
    selector: 'app-recommend-admin',
    templateUrl: './recommend-admin.component.html',
    styleUrls: ['./recommend-admin.component.scss']
})
export class RecommendAdminComponent implements OnInit {

    constructor(private service: RecommendTeacherService) {
    }

    get recommendVo(): RecommendTeacherVo {
        return this.service.recommendVo;
    }

    set recommendVo(value: RecommendTeacherVo) {
        this.service.recommendVo = value;
    }

    get itemsRecommend(): Array<RecommendTeacher> {
        return this.service.itemsRecommend;
    }

    set itemsRecommend(value: Array<RecommendTeacher>) {
        this.service.itemsRecommend = value;
    }

    get selectesRecommend(): Array<RecommendTeacher> {
        return this.service.selectesRecommend;
    }

    set selectesRecommend(value: Array<RecommendTeacher>) {
        this.service.selectesRecommend = value;
    }

    public findByCriteria() {
        return this.service.findByCriteria().subscribe(
            data => {
                console.log(data);
                this.service.itemsRecommend = data;
            },
        );
    }

    ngOnInit(): void {
        this.service.findAllRecommend().subscribe(data => this.itemsRecommend = data);
    }
}
