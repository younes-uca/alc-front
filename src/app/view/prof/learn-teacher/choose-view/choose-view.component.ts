import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {Section} from '../../../../controller/model/section.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {SectionItemService} from '../../../../controller/service/section-item.service';

@Component({
    selector: 'app-choose-view',
    templateUrl: './choose-view.component.html',
    styleUrls: ['./choose-view.component.scss']
})
export class ChooseViewComponent implements OnInit {
    value = 0;
    img = '';

    // tslint:disable-next-line:max-line-length
    constructor(private sectionItemService: SectionItemService,private quizService: QuizEtudiantService, private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get image(): string {
        return this.service.image;
    }

    set image(value: string) {
        this.service.image = value;
    }

    get selectedQuiz(): Quiz {
        return this.quizService.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.quizService.selectedQuiz = value;
    }

    set selectessection(value: Array<Section>) {
        this.service.selectessection = value;
    }

    get viewChooseType(): boolean {
        return this.service.viewChooseType;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set viewChooseType(value: boolean) {
        this.service.viewChooseType = value;
    }

// tslint:disable-next-line:adjacent-overload-signatures
    get itemssection2(): Array<Section> {
        return this.service.itemssection2;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemssection2(value: Array<Section>) {
        this.service.itemssection2 = value;
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

    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    ngOnInit(): void {
    }

    public FindSection(cour: Cours) {
        this.selectedcours = cour;
        this.service.affichelistSection().subscribe(
            data => {
                this.selectessection = data;

            });
    }

    get showVocabulary(): boolean {
        return this.sectionItemService.showVocabulary;
    }

    set showVocabulary(value: boolean) {
        this.sectionItemService.showVocabulary = value;
    }

    Vocab(section: Section) {
        this.sectionItemService.sectionSelected = section;

        this.sectionItemService.getSectionItems().subscribe(data => {
            this.sectionItemService.sectionSelected.sectionItems = data;
            console.log(data);
            this.showVocabulary = true;
        });

    }

    public FindSectionOneByOne(cour: Cours) {
        this.selectedcours = cour;
        let i = 0;
        i = i + 1;
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.service.image = '';
        this.service.afficheOneSection().subscribe(
            data => {
                this.selectedsection = data;
                if (data.categorieSection.libelle === 'Vocabulary') {
                    this.Vocab(data);
                } else {
                    this.showVocabulary=false
                }
                this.quizService.findQuizBySection(this.selectedsection.id).subscribe(data => {
                    this.selectedQuiz = data;
                });
                //    for (let j = 0; j < 76 ; j++)
                //  {
                //  this.service.image = this.service.selectedsection.urlImage;
                this.service.image = this.selectedsection.urlImage;
                //   this.img = this.service.image;
                // }
                // this.service.image += 'preview';
                console.log(this.service.image);
            });
        this.quizService.section.id = this.selectedsection.id;
        this.quizService.findQuizSection().subscribe(data => this.selectedQuiz = data);
    }

    public viewType() {
        this.viewChooseType = true;
    }
}
