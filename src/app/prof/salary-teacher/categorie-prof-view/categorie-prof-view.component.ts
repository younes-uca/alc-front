import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../controller/service/class-room.service';
import {CategorieProf} from '../../../controller/model/categorie-prof.model';

@Component({
    selector: 'app-categorie-prof-view',
    templateUrl: './categorie-prof-view.component.html',
    styleUrls: ['./categorie-prof-view.component.scss']
})
export class CategorieProfViewComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ClassRoomService) {
    }

    get selectedcategorieProf(): CategorieProf {
        return this.service.selectedcategorieProf;
    }

    set cselectedategorieProf(value: CategorieProf) {
        this.service.selectedcategorieProf = value;
    }

    get itemscategorieProf(): Array<CategorieProf> {
        return this.service.itemscategorieProf;
    }

    set itemscategorieProf(value: Array<CategorieProf>) {
        this.service.itemscategorieProf = value;
    }

    get selectescategorieProf(): Array<CategorieProf> {
        return this.service.selectescategorieProf;
    }

    set selectescategorieProf(value: Array<CategorieProf>) {
        this.service.selectescategorieProf = value;
    }

    get viewDialogCategorie(): boolean {
        return this.service.viewDialogCategorie;
    }

    set viewDialogCategorie(value: boolean) {
        this.service.viewDialogCategorie = value;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAllCategorieProf().subscribe(data => this.itemscategorieProf = data);
    }

    public hideViewDialog() {
        this.viewDialogCategorie = false;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'code', header: 'Code'},
            {field: 'level', header: 'Level'},
            {field: 'lessonRate', header: 'LessonRate'}
        ];
    }
}
