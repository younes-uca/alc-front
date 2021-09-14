/* tslint:disable:no-shadowed-variable whitespace */
import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Section} from '../../../../controller/model/section.model';
import {Cours} from '../../../../controller/model/cours.model';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {LoginService} from '../../../../controller/service/login.service';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';
import {DictionaryService} from '../../../../controller/service/dictionary.service';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {Router} from '@angular/router';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {EtudiantCours} from '../../../../controller/model/etudiant-cours.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';
import {Inscription} from '../../../../controller/model/inscription.model';
import {EtudiantReview} from '../../../../controller/model/etudiant-review.model';
import {EtudiantReviewService} from '../../../../controller/service/etudiant-review.service';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}


@Component({
    selector: 'app-student-simulate-section',
    templateUrl: './student-simulate-section.component.html',
    styleUrls: ['./student-simulate-section.component.scss']
})
export class StudentSimulateSectionComponent implements OnInit {
    nodes: TreeNode[];
    menu: MenuItem[];
    srcImg: string;
    translate: any;
    textSeleted: string;
    filteredDict: any[];
    synonym: any[];
    value = 0;
    word: string;
    wordDict: any;
    j: number;

    // tslint:disable-next-line:max-line-lengthg max-line-length
    constructor(private messageService: MessageService,
                private router: Router,
                private dictionnaryService: DictionaryService,
                private sanitizer: DomSanitizer,
                private confirmationService: ConfirmationService,
                private service: ParcoursService,
                private http: HttpClient,
                private quizService: QuizEtudiantService,
                private loginService: LoginService,
                private vocab: VocabularyService,
                private review: EtudiantReviewService,
                private sectionItemService: SectionItemService) {
    }
    get viewDialog(): boolean {
        return this.review.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.review.viewDialog = value;
    }

    public view(EtudiantReview: EtudiantReview) {
        this.review.selected = {...EtudiantReview};
        this.viewDialog = true;
    }
    get contenuSection(): Array<string> {
        return this.service.contenuSection;
    }

    set contenuSection(value: Array<string>) {
        this.service.contenuSection = value;
    }
    get selected(): Dictionary {
        return this.dictionnaryService.selected;
    }

    set selected(value: Dictionary) {
        this.dictionnaryService.selected = value;
    }

    get itemsDict(): Array<Dictionary> {
        return this.dictionnaryService.itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this.dictionnaryService.itemsDict = value;
    }

    get image(): string {
        return this.service.image;
    }

    set image(value: string) {
        this.service.image = value;
    }

    get selectedDict(): Dictionary {
        return this.dictionnaryService.selectedDict;
    }

    set selectedDict(value: Dictionary) {
        this.dictionnaryService.selectedDict = value;
    }

    get selectedEtudiantCours(): EtudiantCours {
        return this.service.selectedEtudiantCours;
    }

    set selectedEtudiantCours(value: EtudiantCours) {
        this.service.selectedEtudiantCours = value;
    }

    get itemsEtudiantCours(): Array<EtudiantCours> {
        return this.service.itemsEtudiantCours;
    }

    set itemsEtudiantCours(value: Array<EtudiantCours>) {
        this.service.itemsEtudiantCours = value;
    }

    get submittedDictEdit(): boolean {
        return this.dictionnaryService.submittedDictEdit;
    }

    set submittedDictEdit(value: boolean) {
        this.dictionnaryService.submittedDictEdit = value;
    }

    get editDialogDict(): boolean {
        return this.dictionnaryService.editDialogDict;
    }

    set editDialogDict(value: boolean) {
        this.dictionnaryService.editDialogDict = value;
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

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    get section(): Section {
        return this.quizService.section;
    }

    set section(value: Section) {
        this.quizService.section = value;
    }

    get selectedQuiz(): Quiz {
        return this.quizService.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.quizService.selectedQuiz = value;
    }

    get etudiant(): Etudiant {
        return this.loginService.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.loginService.etudiant = value;
    }

    get quizEtudiantList(): QuizEtudiant {
        return this.quizService.quizEtudiantList;
    }

    set quizEtudiantList(value: QuizEtudiant) {
        this.quizService.quizEtudiantList = value;
    }

    get passerQuiz(): string {
        return this.quizService.passerQuiz;
    }

    set passerQuiz(value: string) {
        this.quizService.passerQuiz = value;
    }

    get quizView(): boolean {
        return this.quizService.quizView;
    }

    set quizView(value: boolean) {
        this.quizService.quizView = value;
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

    get selectessection(): Array<Section> {
        return this.service.selectessection;
    }

    set selectessection(value: Array<Section>) {
        this.service.selectessection = value;
    }

    public findByWord() {
        this.dictionnaryService.FindByWord(this.word).subscribe(
            data => {
                this.selectedDict = data;
                document.getElementById('dictionnair').style.visibility = 'visible';
                document.getElementById('dictionnair').style.width = '90%';
                document.getElementById('dictionnair').style.height = '100%';
                this.word ='';
            }, error => console.log('erreeeeeeeeeeeeeeeeur'));
        document.getElementById('dictionnair').style.visibility = 'hidden';
        document.getElementById('dictionnair').style.width = '0px';
        document.getElementById('dictionnair').style.height = '0px';
    }

    public Section(libelle: string) {
        this.service.afficheSection(libelle).subscribe(
            data => {
                this.selectedsection = data;
                this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                    data => {
                        this.selectedQuiz = data;
                        this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
                            data => {
                                this.quizEtudiantList = data;
                                console.log(this.quizEtudiantList);
                                this.quizService.findAllQuestions(this.selectedQuiz.ref).subscribe(
                                    dataQuestions => {
                                        if(data.questionCurrent > dataQuestions.length){
                                            this.passerQuiz = 'View Quiz';
                                            this.quizView = true;
                                        }
                                        else {
                                            this.passerQuiz = 'Continue Quiz';
                                            this.quizView = false;
                                        }
                                    }
                                );
                            },error =>
                            {
                                this.passerQuiz = 'Take Quiz';
                                this.quizView = false;
                            }
                        );
                    },
                );
            }, error => console.log('erreeeeeeeeeeeeeeeeur'));
    }

    public finish() {
        this.selectedEtudiantCours.etudiant.id = this.loginService.etudiant.id;
        console.log(this.selectedEtudiantCours.etudiant.id);
        this.selectedEtudiantCours.cours.id = this.selectedcours.id;
        console.log(this.selectedEtudiantCours.cours.id);
        this.service.saveEtudiantCours().subscribe(data => {
            // @ts-ignore
            this.itemsEtudiantCours.push({...data});
            this.viewDialog = true;
        });
        this.router.navigate(['/pages/etudiantcours']);
    }

    public openCreateDict() {
        document.getElementById('dictionnair').style.visibility = 'hidden';
        document.getElementById('dictionnair').style.width = '0px';
        document.getElementById('dictionnair').style.height = '0px';
        this.submittedDict = false;
        this.createDialogDict = true;
        this.selectedDict = new Dictionary();
    }

    filterDict(event) {
        const filtered: any[] = [];
        const query = event.query;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.itemsDict.length; i++) {
            const dict = this.itemsDict[i];
            // tslint:disable-next-line:triple-equals
            if (dict.word.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(dict);
            }
        }

        this.filteredDict = filtered;
    }

    ngOnInit(): void {
        this.dictionnaryService.FindAllWord().subscribe(
            data => {
                this.itemsDict = data;
            });
        // this.photoURL();
        this.quizService.section.id = this.selectedsection.id;
        this.quizService.findQuizSection().subscribe(data => this.selectedQuiz = data);
        this.vocab.findAllVocabSection().subscribe(data => {
            this.vocab.nombreVocab = data.length;
        });

        this.menu = [
            {
                icon: 'pi pi-list', command: (event) => {
                    this.service.affichelistSection().subscribe(
                        data => {
                            this.itemssection2 = data;
                            // tslint:disable-next-line:no-shadowed-variable
                        });
                    document.getElementById('word').style.visibility = 'hidden';
                    document.getElementById('word').style.height = '0px';

                    document.getElementById('categoriess').style.visibility = 'visible';

                    document.getElementById('categoriess').style.width = '100%';
                    document.getElementById('categoriess').style.height = '100%';
                    document.getElementById('categ').style.height = '100%';
                    document.getElementById('chat').style.visibility = 'hidden';
                }
            }, {
                icon: 'pi pi-fw pi-comments', command: (event) => {
                    document.getElementById('categoriess').style.visibility = 'hidden';
                    document.getElementById('categoriess').style.height = '0px';
                    document.getElementById('word').style.visibility = 'hidden';
                    document.getElementById('word').style.height = '0px';
                    document.getElementById('chat').style.visibility = 'visible';
                }
            },
            {
                icon: 'pi pi-book', style: {width: '50%'}, command: (event) => {
                    this.dictionnaryService.FindAllWord().subscribe(
                        data => {
                            this.itemsDict = data;
                        });
                    document.getElementById('categoriess').style.visibility = 'hidden';
                    document.getElementById('categoriess').style.height = '0px';
                    document.getElementById('word').style.visibility = 'visible';
                    document.getElementById('word').style.width = '100%';
                    document.getElementById('word').style.height = '100%';
                    document.getElementById('wrd').style.height = '100%';
                    document.getElementById('chat').style.visibility = 'hidden';
                }
            },
        ];
    }

    public findCoursEtudiant(cours: Cours) {
        this.selectedEtudiantCours.cours.id = cours.id;
        this.service.findEtudiantCours().subscribe(
            data => this.selectedEtudiantCours = data
        );
    }

    public dictEdit(dict: Dictionary) {
        this.selected = dict;
        if (this.selected.word != null) {
            this.submittedDictEdit = false;
            this.editDialogDict = true;
        }
    }
    get listSynonymes(): Array<any> {
        return this.dictionnaryService.listSynonymes;
    }

    set listSynonymes(value: Array<any>) {
        this.dictionnaryService.listSynonymes = value;
    }
    get Synonymes(): Array<any> {
        return this.dictionnaryService.Synonymes;
    }

    set Synonymes(value: Array<any>) {
        this.dictionnaryService.Synonymes = value;
    }
    public dict() {
        const selection = window.getSelection();
        this.textSeleted = selection.toString();
        this.selected = new Dictionary();

        this.dictionnaryService.FindByWord(this.textSeleted).subscribe(
            data => {
                this.selected = data;
                this.wordDict = '';
                this.listSynonymes = new Array<any>();
                // tslint:disable-next-line:triple-equals no-unused-expression
                if (this.textSeleted.length != 0 && this.selected.word == null) {
                    this.dictionnaryService.Translate(this.textSeleted).subscribe(
                        data => {
                            this.Synonymes = data;
                            console.log(this.Synonymes);
                            this.wordDict = '';
                            this.j = 0;
                            this.listSynonymes = new Array<any>();
                            for ( let i=this.j; i < this.Synonymes.length ; i++){
                                // tslint:disable-next-line:triple-equals
                                if(this.Synonymes[i] == '\"'){
                                    this.j = i;
                                    // @ts-ignore
                                    for ( let k=this.j + 1; k < this.Synonymes.length ; k++){
                                        // tslint:disable-next-line:triple-equals
                                        if(this.Synonymes[k] != '\"' && this.Synonymes[k] != ','){
                                            this.wordDict = this.wordDict + this.Synonymes[k];
                                        }else if (this.Synonymes[k] == ',') {
                                            break;
                                        } else
                                        {
                                            this.listSynonymes.push(this.wordDict);
                                            this.wordDict ='';
                                            this.j = k + 1;
                                            break;
                                        }
                                    }
                                }
                            }
                        });

                    console.log(this.listSynonymes);
                    this.selected.word = this.textSeleted;
                    this.submittedDict = false;
                    this.TranslateSynonymeDialog = true;
                    // tslint:disable-next-line:triple-equals
                } else if (this.textSeleted.length != 0 && this.selected.word != null) {
                    this.selected.word = this.textSeleted;
                    this.submittedDictEdit = false;
                    this.editDialogDict = true;
                    //console.log(this.selected.word);
                }
            });
    }
    get TranslateSynonymeDialog(): boolean {
        return this.dictionnaryService.TranslateSynonymeDialog;
    }

    set TranslateSynonymeDialog(value: boolean) {
        this.dictionnaryService.TranslateSynonymeDialog = value;
    }
    Vocab(section: Section) {
        this.sectionItemService.sectionSelected=section;
        this.router.navigate(['/pages/preview-section-items']);
    }

    PreviousSection() {
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder != 0) {
            this.service.afficheOneSection2().subscribe(
                data => {
                    this.selectedsection = data;
                    this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                        data => {
                            this.selectedQuiz = data;
                            this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
                                data => {
                                    this.quizEtudiantList = data;
                                    console.log(this.quizEtudiantList);
                                    this.quizService.findAllQuestions(this.selectedQuiz.ref).subscribe(
                                        dataQuestions => {
                                            if(data.questionCurrent > dataQuestions.length){
                                                this.passerQuiz = 'View Quiz';
                                                this.quizView = true;
                                            }
                                            else {
                                                this.passerQuiz = 'Continue Quiz';
                                                this.quizView = false;
                                            }
                                        }
                                    );
                                },error =>
                                {
                                    this.passerQuiz = 'Take Quiz';
                                    this.quizView = false;
                                }
                            );
                        },
                    );
                });
        } else {
            this.selectedsection.numeroOrder = this.itemssection2.length + 1;
            this.NextSection();
        }
    }

    photoURL() {
        // this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        // this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        //  console.log(this.selectedsection.id);
        // const blob = UrlFetch(this.image,{headers})
        //  return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
        // return this.service.image;
        this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        //  console.log(this.service.image);
        this.srcImg = this.service.image;
        return this.srcImg;

        //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
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
        //   console.log(this.service.video);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.video);
        return this.service.video;

    }

    NextSection() {
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
                    this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                        data => {
                            this.selectedQuiz = data;

                            this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
                                data => {
                                    this.quizEtudiantList = data;
                                    console.log(this.quizEtudiantList);
                                    this.quizService.findAllQuestions(this.selectedQuiz.ref).subscribe(
                                        dataQuestions => {
                                            if(data.questionCurrent > dataQuestions.length){
                                                this.passerQuiz = 'View Quiz';
                                                this.quizView = true;
                                            }
                                            else {
                                                this.passerQuiz = 'Continue Quiz';
                                                this.quizView = false;
                                            }
                                        }
                                    );
                                },error =>
                                {
                                    this.passerQuiz = 'Take Quiz';
                                    this.quizView = false;
                                }
                            );
                        },
                    );
                });
        } else {
            this.selectedsection.numeroOrder = 0;
            this.PreviousSection();
        }
    }

}
