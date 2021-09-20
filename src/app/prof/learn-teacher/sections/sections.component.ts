import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {Section} from '../../../controller/model/section.model';
import {DomSanitizer} from '@angular/platform-browser';
import {Cours} from '../../../controller/model/cours.model';

@Pipe({name: 'safe'})
export class SafePipe2 implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}


@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

    srcImg = '';
    cols: any[];

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, public sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    set itemssection2(value: Array<Section>) {
        this.service.itemssection2 = value;
    }
    public sectionSimulate(section: Section){
        this.selectedsection = section;
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });

    }
    get selectedcours(): Cours {
        return this.service.selectedcours;
    }
    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    get selectessection(): Array<Section> {
        return this.service.selectessection;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    ngOnInit(): void {
        this.initCol();
        // this.srcImg = this.photoURL();
    }

    photoURL() {
        return this.service.image2;
        // return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image2);
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'questions', header: 'Questions'},
            {field: 'urlVideo', header: 'UrlVideo'},
            {field: 'urlImage3', header: 'UrlImage3'},
            {field: 'urlImage2', header: 'UrlImage2'},
            {field: 'urlImage', header: 'UrlImage'},
            {field: 'contenu', header: 'Contenu'},
            {field: 'content', header: 'Content'},
            {field: 'indicationProf', header: 'IndicationProf'},
            {field: 'cours', header: 'Cours'},
            {field: 'categorieSection', header: 'CategorieSection'},
            {field: 'url', header: 'Url'},
            {field: 'superCategorieSection', header: 'SuperCategorieSection'}
        ];
    }

}
