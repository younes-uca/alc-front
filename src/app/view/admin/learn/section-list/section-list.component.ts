import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Section} from '../../../../controller/model/section.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {Cours} from '../../../../controller/model/cours.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';


@Component({
    selector: 'app-section-list',
    templateUrl: './section-list.component.html',
    styleUrls: ['./section-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class SectionListComponent implements OnInit {

    cols: any[];

    // tslint:disable-next-line:max-line-length no-shadowed-variable
    constructor(private serviceQuiz: QuizService, private quizService: QuizEtudiantService, private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService, private router: Router, private VocabularyService: VocabularyService, private sectionItemService: SectionItemService) {
    }

    get selectedQuiz(): Quiz {
        return this.quizService.selectedQuiz;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedQuiz(value: Quiz) {
        this.quizService.selectedQuiz = value;
    }

    get quizItems(): Array<Quiz> {
        return this.quizService.quizItems;
    }

    set quizItems(value: Array<Quiz>) {
        this.quizService.quizItems = value;
    }

    get idSection(): number {
        return this.VocabularyService.idSection;
    }

    set idSection(value: number) {
        this.VocabularyService.idSection = value;
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    get selectessection(): Array<Section> {
        return this.service.selectessection;
    }

    set selectessection(value: Array<Section>) {
        this.service.selectessection = value;
    }

    get createDialogSection(): boolean {
        return this.service.createDialogSection;
    }

    set createDialogSection(value: boolean) {
        this.service.createDialogSection = value;
    }

    get editDialogSection(): boolean {
        return this.service.editDialogSection;
    }

    set editDialogSection(value: boolean) {
        this.service.editDialogSection = value;
    }

    get viewDialogSection(): boolean {
        return this.service.viewDialogSection;
    }

    set viewDialogSection(value: boolean) {
        this.service.viewDialogSection = value;
    }

    get submittedSection(): boolean {
        return this.service.submittedSection;
    }

    set submittedSection(value: boolean) {
        this.service.submittedSection = value;
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
        this.quizService.section.id = this.selectedsection.id;
        this.quizService.findQuizSection().subscribe(data => this.selectedQuiz = data);
        this.quizService.findAllQuiz().subscribe(
            data => {
                this.quizItems = data;
            }
        );
    }

    public openCreateSection() {
        this.submittedSection = false;
        this.createDialogSection = true;
        this.selectedsection = new Section();
    }

    public findAllQuiz() {
        this.quizService.findAllQuiz().subscribe(
            data => {
                this.quizItems = data;
            }
        );
    }

    public findQuiz(section: Section) {
        this.quizService.findQuizBySectionId(section).subscribe(
            data => {
                this.selectedQuiz = data;
            }, error => {
                // tslint:disable-next-line:no-unused-expression
                this.selectedQuiz == null;
            });
    }

    public editSection(sections: Section) {
        this.selectedsection = {...sections};
        this.editDialogSection = true;
    }

    public view(sections: Section) {
        this.selectedsection = {...sections};
        this.viewDialogSection = true;
    }

    public delete(sections: Section) {
        this.selectedsection = sections;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + sections.libelle + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteSection().subscribe(data => {
                    this.itemssection = this.itemssection.filter(val => val.id !== this.selectedsection.id);
                    this.selectedsection = new Section();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Section Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected sections?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleSectionByid().subscribe(data => {
                    this.service.deleteMultipleSectionIndexById();
                    this.selectessection = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Sections Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public getSection(section: Section) {
        console.log(section);
        console.log(section.categorieSection.id);
        this.serviceQuiz.sectionSelected = section;
        console.log(this.serviceQuiz.sectionSelected);
        this.quizService.findQuizBySectionId(section).subscribe(
            data => {
                this.selectedQuiz = data;
                if (this.selectedQuiz.section.id == null) {
                    this.router.navigate(['/pages/quiz-create']);
                } else {
                    this.serviceQuiz.refQuiz = this.selectedQuiz.ref;
                    console.log(this.serviceQuiz.refQuiz);
                    this.router.navigate(['/view/quiz-preview']);
                }
            }, error => {
                // tslint:disable-next-line:no-unused-expression
                this.selectedQuiz == null;
            });
    }

    createVocab(section: Section) {
        this.sectionItemService.sectionSelected = section;

        this.sectionItemService.getSectionItems().subscribe(data => {
            this.sectionItemService.sectionSelected.sectionItems = data;
            console.log(data);
            this.router.navigate(['/pages/create-section-items']);
        });


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
