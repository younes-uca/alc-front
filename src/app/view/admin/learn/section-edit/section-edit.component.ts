import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {Section} from '../../../../controller/model/section.model';
import {CategorieSection} from '../../../../controller/model/categorie-section.model';

@Component({
    selector: 'app-section-edit',
    templateUrl: './section-edit.component.html',
    styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    starttime: string = null;
    endtime: string = null;
    defaultDate = new Date(new Date().setHours(0, 0, 0, 0));

    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    get editDialogSection(): boolean {
        return this.service.editDialogSection;
    }

    set editDialogSection(value: boolean) {
        this.service.editDialogSection = value;
    }

    get submittedSection(): boolean {
        return this.service.submittedSection;
    }

    set submittedSection(value: boolean) {
        this.service.submittedSection = value;
    }

    get itemscategoriesection(): Array<CategorieSection> {
        return this.service.itemscategoriesection;
    }

    set itemscategoriesection(value: Array<CategorieSection>) {
        this.service.itemscategoriesection = value;
    }

    get selectedcategoriesection(): CategorieSection {
        return this.service.selectedcategoriesection;
    }

    set selectedcategoriesection(value: CategorieSection) {
        this.service.selectedcategoriesection = value;
    }

    get itemscours(): Array<Cours> {
        return this.service.itemscours;
    }

    set itemscours(value: Array<Cours>) {
        this.service.itemscours = value;
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    ngOnInit(): void {
    }

    public urlfind(link: any) {
        if (link !== null) {
            const url = link;
            const found = url.match(/d\/([A-Za-z0-9\-\_]+)/);
            if (found !== null) {
                console.log('hadaaaaa found== ' + found[1]);
                return 'https://drive.google.com/uc?export=view&id=' + found[1];
            }
        }
        return link;
    }

    public urlvideo() {
        if (this.selectedsection.urlVideo !== null) {
            if (this.selectedsection.urlVideo.startsWith('https://www.youtube.com/watch')) {
                const found = this.selectedsection.urlVideo.substring(32, 43);
                if (found !== null) {
                    console.log('hadaaaaa found== ' + found);
                    this.selectedsection.urlVideo = 'https://www.youtube.com/embed/' + found;
                }
            }
        }
    }
    public converttime(){
        if ((this.starttime && this.endtime) != null ){
            if (this.selectedsection.urlVideo.search('start')){
                this.selectedsection.urlVideo = this.selectedsection.urlVideo.substring(0, 43);
            }
            const totalsecstart = this.converttoseconds(this.starttime);
            const totalsecend = this.converttoseconds(this.endtime);
            this.selectedsection.urlVideo += '?start=' + totalsecstart + '&end=' + totalsecend;
        }
        if ((this.starttime == null) || (this.endtime == null )){
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            if (this.selectedsection.urlVideo.search('start')){
                this.selectedsection.urlVideo = this.selectedsection.urlVideo.substring(0, 43);
            }
            let totalsecend;
            let totalsecstart;
            if (this.starttime != null){
                totalsecstart = this.converttoseconds(this.starttime);
            }
            else {totalsecstart = ''; }
            if (this.endtime != null){
                totalsecend = this.converttoseconds(this.endtime);
            }
            else {
                totalsecend = '';
            }
            this.selectedsection.urlVideo += '?start=' + totalsecstart + '&end=' + totalsecend;
        }
        this.starttime = null;
        this.endtime = null;
    }
    converttoseconds(time: string): number{
        const a = time.split(':'); // split it at the colons
        const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        console.log('ha total de sec : ' + seconds);
        // tslint:disable-next-line:radix
        return parseInt(String(seconds));
    }

    public editSection() {
        this.submittedSection = true;
        if (this.selectedsection.id) {
            if (this.selectedsection.urlImage) {
                console.log(this.selectedsection.urlImage);
                this.selectedsection.urlImage = this.urlfind(this.selectedsection.urlImage);
            }
            if (this.selectedsection.urlVideo) {
                console.log(this.selectedsection.urlVideo);
                this.converttime();
            }

            this.itemssection[this.service.findSectionIndexById(this.selectedsection.id)] = this.selectedsection;
            this.service.updateSection().subscribe(data => {
                this.selectedsection = data;
                // tslint:disable-next-line:no-shadowed-variable
                this.service.afficheCours().subscribe(data => this.itemscours = data);
                // tslint:disable-next-line:no-shadowed-variable
                this.service.affichelistSection().subscribe(data => this.itemssection = data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Sections Updated',
                    life: 3000
                });
            });
        }
        this.editDialogSection = false;
        this.selectedsection = new Section();

    }

    public hideEditDialog() {
        this.editDialogSection = false;
    }

    findAllCours() {
        this.service.findAllCours().subscribe(data => {
            this.itemscours = data;
        });
    }

    findAllCategorie() {
        this.service.findAllCategorieSection().subscribe(data => {
            this.itemscategoriesection = data;
        });
    }
}
