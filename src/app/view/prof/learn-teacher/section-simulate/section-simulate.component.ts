import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {DictionaryService} from '../../../../controller/service/dictionary.service';
import {SectionItemService} from '../../../../controller/service/section-item.service';

@Pipe({name: 'safe'})
export class SafePipe1 implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-section-simulate',
    templateUrl: './section-simulate.component.html',
    styleUrls: ['./section-simulate.component.scss']
})
export class SectionSimulateComponent implements OnInit {
    nodes: TreeNode[];
    menu: MenuItem[];
    textSeleted: string;
    srcImg: string;
    value = 0;
    word: string;

    // tslint:disable-next-line:max-line-length
    constructor(private sectionItemService: SectionItemService,private messageService: MessageService, private dictionnaryService: DictionaryService, private router: Router, private serviceQuiz: QuizService, private sanitizer: DomSanitizer, private quizService: QuizEtudiantService, private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient) {
    }

    get image(): string {
        return this.service.image;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set image(value: string) {
        this.service.image = value;
    }

    get contenu(): string {
        return this.service.contenu;
    }

    set contenu(value: string) {
        this.service.contenu = value;
    }

    get selectedQuiz(): Quiz {
        return this.quizService.selectedQuiz;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedQuiz(value: Quiz) {
        this.quizService.selectedQuiz = value;
    }

    get itemsDict(): Array<Dictionary> {
        return this.dictionnaryService.itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this.dictionnaryService.itemsDict = value;
    }

    get submittedDict(): boolean {
        return this.dictionnaryService.submittedDict;
    }

    set submittedDict(value: boolean) {
        this.dictionnaryService.submittedDict = value;
    }

    get createDialogDict(): boolean {
        return this.dictionnaryService.createDialogDict;
    }

    set createDialogDict(value: boolean) {
        this.dictionnaryService.createDialogDict = value;
    }

    get selected(): Dictionary {
        return this.dictionnaryService.selected;
    }

    set selected(value: Dictionary) {
        this.dictionnaryService.selected = value;
    }

    get progress(): number {
        return this.service.progress;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set progress(value: number) {
        this.service.progress = value;
    }

    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    set selectedcours(value: Cours) {
        this.service.selectedcours = value;
    }

    get itemssection2(): Array<Section> {
        return this.service.itemssection2;
    }

    set itemssection2(value: Array<Section>) {
        this.service.itemssection2 = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    get selectedDict(): Dictionary {
        return this.dictionnaryService.selectedDict;
    }

    set selectedDict(value: Dictionary) {
        this.dictionnaryService.selectedDict = value;
    }

    get selectessection(): Array<Section> {
        return this.service.selectessection;
    }

    set selectessection(value: Array<Section>) {
        this.service.selectessection = value;
    }

    public Section(libelle: string) {
        this.service.afficheSection(libelle).subscribe(
            data => {
                this.selectedsection = data;
                if (data.categorieSection.libelle === 'Vocabulary') {
                    this.Vocab(data);
                } else {
                    this.showVocabulary=false
                }
                this.quizService.findQuizBySection(this.selectedsection.id).subscribe(
                    data => {
                        this.selectedQuiz = data;
                    });
            }, error => console.log('erreeeeeeeeeeeeeeeeur'));
    }

    public quiz() {
        this.serviceQuiz.refQuiz = this.selectedQuiz.ref;
        console.log(this.serviceQuiz.refQuiz);
        this.router.navigate(['/view/quiz-preview']);
    }

    public dict() {
        const selection = window.getSelection();
        this.textSeleted = selection.toString();
        this.dictionnaryService.FindAllWord().subscribe(
            data => {
                this.itemsDict = data;
            });
        for (let i = 0; i < this.itemsDict.length; i++) {
            if (this.textSeleted.length != 0) {
                this.selected.word = this.textSeleted;
                this.submittedDict = false;
                this.createDialogDict = true;
            }
        }
    }

    public openCreateDict() {
        this.selectedDict = new Dictionary();
        this.submittedDict = false;
        this.createDialogDict = true;
    }

    public findByWord() {
        this.dictionnaryService.FindByWord(this.word).subscribe(
            data => {
                this.selectedDict = data;
                document.getElementById('dictionary').style.visibility = 'visible';
            }, error => console.log('erreeeeeeeeeeeeeeeeur'));
        document.getElementById('dictionary').style.visibility = 'visible';
    }

    ngOnInit(): void {
        // this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        /*this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        console.log('ana image ' + this.service.image + this.selectedsection.urlImage);
        this.srcImg = this.service.image;
       // this.photoURL();
        console.log(this.selectedsection.urlVideo );
       // this.srcImg = this.photoURL();
       // this.srcImg = this.service.image;
        console.log(this.srcImg);*/
        /* this.quizService.section.id = this.selectedsection.id;
         this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
         */
        this.menu = [
            {
                icon: 'pi pi-fw pi-home', command: (event) => {
                    this.service.affichelistSection().subscribe(
                        data => {
                            this.itemssection2 = data;
                            // tslint:disable-next-line:no-shadowed-variable
                        });
                    //  document.getElementById('word').style.visibility = 'hidden';
                    //  document.getElementById('word').style.height = '0px';

                    document.getElementById('categoriess').style.visibility = 'visible';

                    document.getElementById('categoriess').style.width = '100%';
                    document.getElementById('categ').style.width = '100%';
                    document.getElementById('categoriess').style.height = '100%';
                    document.getElementById('categ').style.height = '100%';
                    document.getElementById('chat').style.visibility = 'hidden';
                }
            },
            {
                icon: 'pi pi-fw pi-comments', command: (event) => {
                    document.getElementById('categoriess').style.visibility = 'hidden';
                    document.getElementById('categoriess').style.height = '0px';
                    document.getElementById('categ').style.height = '0px';
                    //   document.getElementById('word').style.visibility = 'hidden';
                    //   document.getElementById('word').style.height = '0px';
                    document.getElementById('chat').style.visibility = 'visible';
                }
            }
        ];
    }

    PreviousSection() {
        //this.quizService.section.id = this.selectedsection.id;
        //this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder != 0) {
            this.service.afficheOneSection2().subscribe(data => {
                this.selectedsection = data;
                if (data.categorieSection.libelle === 'Vocabulary') {
                    this.Vocab(data);
                } else {
                    this.showVocabulary=false
                }
                this.quizService.findQuizBySection(this.selectedsection.id).subscribe(
                    data => {
                        this.selectedQuiz = data;
                    });
            });
        } else {
            this.selectedsection.numeroOrder = this.itemssection2.length + 1;
            this.NextSection();
        }
    }

    URLVideo() {
        this.service.video = '';
        // tslint:disable-next-line:prefer-for-of
        // for (let m = 0; m < 24 ; m++)
        // {
        this.service.video = this.selectedsection.urlVideo;
        // }
        //   for (let m = 32; m < 43 ; m++)
        //   {
        //  }
        console.log(this.service.video);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.video);
        return this.service.video;
    }

    photoURL() {
        this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        console.log(this.service.image);
        this.srcImg = this.service.image;
        return this.srcImg;
        // const blob = UrlFetch(this.image,{headers})
        //  return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
        // return this.service.image;
    }

    Contenu() {
        this.service.contenu = '';
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.selectedsection.contenu.length; j++) {
            // tslint:disable-next-line:triple-equals
            if (this.selectedsection.contenu[j] != '-') {
                this.service.contenu += this.selectedsection.contenu[j];
                // tslint:disable-next-line:triple-equals
            } else {
                // tslint:disable-next-line:triple-equals
                if (this.selectedsection.contenu[j] == '-') {
                    this.service.contenu += '\n';
                    this.service.contenu += this.selectedsection.contenu[j];
                }
            }
        }
        console.log(this.service.contenu);
        return this.service.contenu;
    }

    NextSection() {
        //this.quizService.section.id = this.selectedsection.id;
        //this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder <= this.itemssection2.length) {
            this.service.afficheOneSection2().subscribe(
                data => {
                    this.selectedsection = data;
                    if (data.categorieSection.libelle === 'Vocabulary') {
                        this.Vocab(data);
                    } else {
                        this.showVocabulary=false
                    }
                    this.quizService.findQuizBySection(this.selectedsection.id).subscribe(
                        data => {
                            this.selectedQuiz = data;
                        });
                });
        } else {
            this.selectedsection.numeroOrder = 0;
            this.PreviousSection();
        }
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
            this.showVocabulary=true
        });

    }
    return($event: string) {
        this.showVocabulary=false
    }

}
