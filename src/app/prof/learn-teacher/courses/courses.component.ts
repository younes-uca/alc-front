import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {Cours} from '../../../controller/model/cours.model';
import {Section} from '../../../controller/model/section.model';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


    sortKey: any[];
    cols: any[];

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get viewChooseType(): boolean {
        return this.service.viewChooseType;
    }

    set viewChooseType(value: boolean) {
        this.service.viewChooseType = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set submittedCours(value: boolean) {
        this.service.submittedCours = value;
    }

    set selectessection(value: Array<Section>) {
        this.service.selectessection = value;
    }

    get createDialogCours(): boolean {
        return this.service.createDialogCours;
    }

    set createDialogCours(value: boolean) {
        this.service.createDialogCours = value;
    }

    get editDialogCours(): boolean {
        return this.service.editDialogCours;
    }

    set editDialogCours(value: boolean) {
        this.service.editDialogCours = value;
    }

    get viewDialogCours(): boolean {
        return this.service.viewDialogCours;
    }

    set viewDialogCours(value: boolean) {
        this.service.viewDialogCours = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    set selectedcours(value: Cours) {
        this.service.selectedcours = value;
    }

    get itemscours(): Array<Cours> {
        return this.service.itemscours;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemscours(value: Array<Cours>) {
        this.service.itemscours = value;
    }

    get selectescours(): Array<Cours> {
        return this.service.selectescours;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectescours(value: Array<Cours>) {
        this.service.selectescours = value;
    }

    ngOnInit(): void {
        this.initCol();
        this.viewChooseType = false;
    }

    public openCreateCours() {
        this.selectedcours = new Cours();
        this.submittedCours = false;
        this.createDialogCours = true;
    }

    public editCours(cour: Cours) {
        this.selectedcours = {...cour};
        this.editDialogCours = true;
    }

    public FindSection(cour: Cours) {
        this.selectedcours = cour;
        this.service.affichelistSection().subscribe(
            data => {
                this.selectessection = data;
            });
    }

    public viewType(cours: Cours) {
        this.selectedcours = {...cours};
        this.viewChooseType = true;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'description', header: 'Description'},
            {field: 'nombreSectionFinalise', header: 'NombreSectionFinalise'},
            {field: 'image', header: 'Image'},
            {field: 'nombreSectionEnCours', header: 'NombreSectionEnCours'},
            {field: 'nombreLinkEnCours', header: 'NombreLinkEnCours'},
            {field: 'nombreLinkFinalise', header: 'NombreLinkFinalise'},
            {field: 'numeroOrder', header: 'NumeroOrder'},
            {field: 'parcours', header: 'Parcours'}
        ];
    }

}
