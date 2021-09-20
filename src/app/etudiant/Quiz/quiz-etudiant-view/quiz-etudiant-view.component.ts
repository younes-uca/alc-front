import {Component, OnInit} from '@angular/core';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../controller/model/quiz-class-room.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Question} from '../../../controller/model/question.model';
import {Reponse} from '../../../controller/model/reponse.model';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {Router} from '@angular/router';
import {DictionaryService} from '../../../controller/service/dictionary.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';
import {VocabularyService} from '../../../controller/service/vocabulary.service';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Dictionary} from '../../../controller/model/dictionary.model';
import {Section} from '../../../controller/model/section.model';

@Component({
    selector: 'app-quiz-etudiant-view',
    templateUrl: './quiz-etudiant-view.component.html',
    styleUrls: ['./quiz-etudiant-view.component.scss']
})
export class QuizEtudiantViewComponent implements OnInit {

    constructor(private service: QuizEtudiantService, private login: LoginService, private messageService: MessageService, private router: Router, private dictionnaryService: DictionaryService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private parcoursservice: ParcoursService, private http: HttpClient, private  vocab: VocabularyService) {
    }

    private selectedValue: number;
    private _selectedValueCheckbox: Array<Reponse>;
    private _type: string;
    private _button: string;
    private _radio: string;
    private _checkbox: string;
    private _noteQst: number;
    private _noteQuiz: number;
    private _noteCheckbox: number;
    private _numeroCheckBox: number;
    private _numeroQuestion: number;
    question1 = '';
    question2 = '';
    debutBlink = 0;
    finBlink = 0;
    answer = '_____';
    answerCorrect = '';
    isSelected: boolean;
    correctMistakeAnswer: string;
    private _disable: boolean;
    myAnswerCorrectMistake: string;
    trueAnswerCorrectMistake: string;
    image: string;
    ref: string;
    private _myanswers: Array<string>;
    private _correctanswers: Array<string>;
    private _questionanswers: Array<string>;
    private _numberofword: Array<string>;
    word = '';
    correctMistakeNumber: number;
    j: number;
    private _answerCorrectOrFalse: Array<boolean>;
    isChecked: boolean;
    next: boolean;
    translate: string;
    question= '';
    wordDictionnary: string;
    filteredDict: any[];
    nodes: TreeNode[];
    menu: MenuItem[];
    resultat: string;
    on_off : boolean;
    totalNote = 0;
    myAnswerEtudiant : Array<ReponseEtudiant>;
    isCorrect: boolean;

    get answerCorrectOrFalse(): Array<boolean> {
        if(this._answerCorrectOrFalse == null)
        {
            this._answerCorrectOrFalse = new Array<boolean>();
        }
        return this._answerCorrectOrFalse;
    }

    set answerCorrectOrFalse(value: Array<boolean>) {
        this._answerCorrectOrFalse = value;
    }

    get myanswers(): Array<string> {
        if (this._myanswers == null) {
            this._myanswers = new Array<string>();
        }
        return this._myanswers;
    }

    set myanswers(value: Array<string>) {
        this._myanswers = value;
    }


    get correctanswers(): Array<string> {
        if (this._correctanswers == null) {
            this._correctanswers = new Array<string>();
        }
        return this._correctanswers;
    }

    set correctanswers(value: Array<string>) {
        this._correctanswers = value;
    }

    get questionanswers(): Array<string> {
        if (this._questionanswers == null) {
            this._questionanswers = new Array<string>();
        }
        return this._questionanswers;
    }

    set questionanswers(value: Array<string>) {
        this._questionanswers = value;
    }


    get numberofword(): Array<string> {
        return this._numberofword;
    }

    set numberofword(value: Array<string>) {
        if (this._numberofword == null) {
            this._numberofword = new Array<string>();
        }
        this._numberofword = value;
    }

    get disable(): boolean {
        return this._disable;
    }

    set disable(value: boolean) {
        this._disable = value;
    }

    get numeroQuestion(): number {
        return this._numeroQuestion;
    }

    set numeroQuestion(value: number) {
        this._numeroQuestion = value;
    }

    get numeroCheckBox(): number {
        return this._numeroCheckBox;
    }

    set numeroCheckBox(value: number) {
        this._numeroCheckBox = value;
    }

    get noteCheckbox(): number {
        return this._noteCheckbox;
    }

    set noteCheckbox(value: number) {
        this._noteCheckbox = value;
    }

    get selectedValueCheckbox(): Array<Reponse> {
        if (this._selectedValueCheckbox == null) {
            this._selectedValueCheckbox = new Array<Reponse>();
        }
        return this._selectedValueCheckbox;
    }

    set selectedValueCheckbox(value: Array<Reponse>) {
        this._selectedValueCheckbox = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get reponsesEtudiant(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiant;
    }

    set reponsesEtudiant(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiant = value;
    }

    get myAnswer(): Reponse {
        return this.service.myAnswer;
    }

    set myAnswer(value: Reponse) {
        this.service.myAnswer = value;
    }

    get reponseEtudiant(): ReponseEtudiant {
        return this.service.reponseEtudiant;
    }

    set reponseEtudiant(value: ReponseEtudiant) {
        this.service.reponseEtudiant = value;
    }

    get noteQst(): number {
        return this._noteQst;
    }

    set noteQst(value: number) {
        this._noteQst = value;
    }

    get noteQuiz(): number {
        return this._noteQuiz;
    }

    set noteQuiz(value: number) {
        this._noteQuiz = value;
    }

    get correctAnswers(): Array<Reponse> {
        return this.service.correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this.service.correctAnswers = value;
    }

    get checkbox(): string {
        return this._checkbox;
    }

    set checkbox(value: string) {
        this._checkbox = value;
    }

    get radio(): string {
        return this._radio;
    }

    set radio(value: string) {
        this._radio = value;
    }

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }

    get quiz(): Quiz {
        return this.service.quiz;
    }

    set quiz(value: Quiz) {
        this.service.quiz = value;
    }

    get items(): Array<Question> {
        return this.service.items;
    }

    set items(value: Array<Question>) {
        this.service.items = value;
    }

    get selected(): Question {
        return this.service.selected;
    }

    set selected(value: Question) {
        this.service.selected = value;
    }

    get reponses(): Array<Reponse> {
        return this.service.reponses;
    }

    set reponses(value: Array<Reponse>) {
        this.service.reponses = value;
    }

    get numReponses(): number {
        return this.service.numReponses;
    }

    set numReponses(value: number) {
        this.service.numReponses = value;
    }

    get numQuestion(): number {
        return this.service.numQuestion;
    }

    set numQuestion(value: number) {
        this.service.numQuestion = value;
    }

    get quizsEtudiant(): Array<QuizEtudiant> {
        return this.service.quizsEtudiant;
    }

    set quizsEtudiant(value: Array<QuizEtudiant>) {
        this.service.quizsEtudiant = value;
    }

    get quizEtudiant(): QuizEtudiant {
        return this.service.quizEtudiant;
    }

    set quizEtudiant(value: QuizEtudiant) {
        this.service.quizEtudiant = value;
    }

    get selectedQuiz(): Quiz {
        return this.service.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.service.selectedQuiz = value;
    }

    get selectedDict(): Dictionary {
        return this.dictionnaryService.selectedDict;
    }

    set selectedDict(value: Dictionary) {
        this.dictionnaryService.selectedDict = value;
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

    set itemssection2(value: Array<Section>) {
        this.parcoursservice.itemssection2 = value;
    }
    get itemssection2(): Array<Section> {
        return this.parcoursservice.itemssection2;
    }

    get selectedsection(): Section {
        return this.parcoursservice.selectedsection;
    }
    get section(): Section {
        return this.service.section;
    }

    set section(value: Section) {
        this.service.section = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedsection(value: Section) {
        this.parcoursservice.selectedsection = value;
    }

    get quizEtudiantList(): QuizEtudiant {
        return this.service.quizEtudiantList;
    }

    set quizEtudiantList(value: QuizEtudiant) {
        this.service.quizEtudiantList = value;
    }

    get passerQuiz(): string {
        return this.service.passerQuiz;
    }

    set passerQuiz(value: string) {
        this.service.passerQuiz = value;
    }

    get quizView(): boolean {
        return this.service.quizView;
    }

    set quizView(value: boolean) {
        this.service.quizView = value;
    }

    get selectedDictionnary(): Dictionary {
        return this.dictionnaryService.selected;
    }

    set selectedDictionnary(value: Dictionary) {
        this.dictionnaryService.selected = value;
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

    ngOnInit(): void {
        this.numQuestion = 0;
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.items = data;
            }
        );
        this.quizEtudiant = new QuizEtudiant();
        this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(data => this.quizEtudiant = data);
        this.start();
        /*this.dictionnaryService.FindAllWord().subscribe(
            data => {
                this.itemsDict = data;
            });
        this.menu = [
            { icon: 'pi pi-list', command: (event) => {
                    this.parcoursservice.affichelistSection().subscribe(
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
                }}, {icon: 'pi pi-fw pi-comments', command: (event) => {
                    document.getElementById('categoriess').style.visibility = 'hidden';
                    document.getElementById('categoriess').style.height = '0px';
                    document.getElementById('word').style.visibility = 'hidden';
                    document.getElementById('word').style.height = '0px';
                    document.getElementById('chat').style.visibility = 'visible';
                }},
            { icon: 'pi pi-book', style: {width: '50%'}, command: (event) => {
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
                }},
        ];*/
    }

    //////////////////Start/////////
    public start() {
        this.numQuestion = this.numQuestion + 1;
        this.trueAnswerCorrectMistake = '';
        this.myAnswerCorrectMistake = '';
        this.answerCorrect = '';
        this.disable = false;
        this.isChecked = false;
        this.next = false;
        this.on_off = false;
        this.isCorrect = true;
        this.answerCorrectOrFalse = new Array<boolean>();
        document.getElementById('translate-correct-mistake').style.visibility = 'hidden';
        document.getElementById('translate-on-off').style.visibility = 'hidden';
        this.translate = '';
        document.getElementById('myAnswer').style.textDecoration = 'none';
        //document.getElementById('tooltiptext').style.visibility = 'hidden';
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.items = data;
                if (this.numQuestion > this.items.length) {
                    document.getElementById('result').style.visibility = 'visible';
                    document.getElementById('bodyRadio').style.visibility = 'hidden';
                    document.getElementById('bodyRadio').style.height = '0px';
                }
            }
        );
        if (this.numQuestion > this.items.length && this.numQuestion > 1) {
            this.myanswers = new Array<string>();
            this.correctanswers = new Array<string>();
            this.questionanswers = new Array<string>();
            for (let i = 0; i < this.myanswers.length; i++) {
                console.log('000000000000000000000');
                document.getElementById('span-output-' + i).style.color = '#0a80bb';
                document.getElementById('span-output-' + i).style.textDecoration = 'none';
                document.getElementById('span-correct-' + i).style.visibility = 'hidden';
                console.log('heyyyyyyyyyyyyyyyy');
            }
            document.getElementById('result').style.visibility = 'visible';
            document.getElementById('result').style.marginTop = '-100px';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('header').style.visibility = 'hidden';
            document.getElementById('div-output').style.visibility = 'hidden';
            document.getElementById('output-correct-mistake').style.visibility = 'hidden';
            document.getElementById('on-off-question').style.visibility = 'hidden';
            document.getElementById('on-off-question').style.height = '0px';
            document.getElementById('on-off-answer').style.visibility = 'hidden';
            document.getElementById('on-off-answer').style.height = '0px';
            console.log('111111111111111111111111111111111111111111111111');
        }
        this.button = 'Next';
        this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
            data => {
                this.selected = data;
                this.service.findReponses(this.selected.id).subscribe(
                    dataAnswers => {
                        this.reponses = dataAnswers;
                    }
                );
                this.service.findCorrectAnswers(this.selected.id).subscribe(
                    data => {
                        this.correctAnswers = data;





                        if (this.selected.typeDeQuestion.ref == 't1') {
                            console.log(this.quizEtudiant);
                            console.log(this.selected);
                            this.service.findMyAnswerEtudiant(this.quizEtudiant, this.selected).subscribe(
                                data => {
                                    this.myAnswerEtudiant = data;
                                    if(this.myAnswerEtudiant[0].reponse.id == this.correctAnswers[0].id)
                                    {
                                        this.isCorrect = true;
                                    } else {
                                        this.isCorrect = false;
                                    }
                                });

                            for(let i = 0 ; i < this.myanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.question1 = '';
                            this.question2 = '';
                            this.question = '';
                            this.answer = '_____';
                            document.getElementById('mistake').style.visibility = 'hidden';
                            document.getElementById('mistake').style.height = '0px';
                            document.getElementById('div-output').style.visibility = 'hidden';
                            document.getElementById('div-output').style.height = '0px';
                            document.getElementById('question').style.visibility = 'visible';
                            document.getElementById('question').style.height = 'auto';
                            document.getElementById('answers').style.visibility = 'visible';
                            document.getElementById('answers').style.height = 'auto';
                            document.getElementById('on-off-question').style.visibility = 'hidden';
                            document.getElementById('on-off-question').style.height = '0px';
                            document.getElementById('on-off-answer').style.visibility = 'hidden';
                            document.getElementById('on-off-answer').style.height = '0px';
                            this.isSelected = false;
                            for (let i = 0; i < this.selected.libelle.length; i++) {
                                if (this.selected.libelle[i] == '.' && this.selected.libelle[i + 1] == '.' && this.selected.libelle[i + 2] == '.') {
                                    this.debutBlink = i;
                                    for (let j = i + 2; i < this.selected.libelle.length; j++) {
                                        if (this.selected.libelle[j] != '.') {
                                            this.finBlink = j;
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                            for (let i = 0; i < this.debutBlink; i++) {
                                this.question1 = this.question1 + this.selected.libelle[i];
                                this.question = this.question + this.selected.libelle[i];
                            }
                            this.question = this.question + this.correctAnswers[0].lib;
                            for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
                                this.question2 = this.question2 + this.selected.libelle[i];
                                this.question = this.question + this.selected.libelle[i];
                            }
                            for(let i = 0 ; i < this.questionanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.service.translate(this.question).subscribe(
                                data => {
                                    this.translate = data;
                                }
                            );
                        }







                        else if (this.selected.typeDeQuestion.ref == 't4') {
                            for(let i = 0 ; i < this.questionanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.correctMistakeAnswer = null;
                            this.j = -1;
                            this.word = '';
                            this.myanswers = new Array<string>();
                            this.correctanswers = new Array<string>();
                            this.questionanswers = new Array<string>();
                            this.numberofword = new Array<string>();
                            this.answerCorrectOrFalse = new Array<boolean>();
                            this.correctMistakeNumber = 0;
                            document.getElementById('mistake').style.visibility = 'visible';
                            document.getElementById('mistake').style.height = 'auto';
                            document.getElementById('div-output').style.visibility = 'visible';
                            document.getElementById('div-output').style.height = 'auto';
                            document.getElementById('on-off-question').style.visibility = 'hidden';
                            document.getElementById('on-off-question').style.height = '0px';
                            document.getElementById('on-off-answer').style.visibility = 'hidden';
                            document.getElementById('on-off-answer').style.height = '0px';
                            document.getElementById('question').style.visibility = 'hidden';
                            document.getElementById('question').style.height = '0px';
                            document.getElementById('answers').style.visibility = 'hidden';
                            document.getElementById('answers').style.height = '0px';
                            //document.getElementById('output-correct-mistake').style.visibility = 'hidden';
                            this.answerCorrectOrFalse = new Array<boolean>();
                            for(let i = 0 ; i < this.questionanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.correctMistakeNumber = 0;
                            for (let i = this.correctMistakeNumber; i < this.correctAnswers[0].lib.length; i++) {
                                if (this.correctAnswers[0].lib[i] == ' ') {
                                    this.correctMistakeNumber = i;
                                    this.correctanswers.push(this.word);
                                    this.word = '';
                                    continue;
                                } else {
                                    this.word = this.word + this.correctAnswers[0].lib[i];
                                }
                                if (i == this.correctAnswers[0].lib.length - 1) {
                                    this.correctanswers.push(this.word);
                                    this.word = '';
                                    continue;
                                }
                            }
                            this.correctMistakeNumber = 0;
                            this.word = '';

                            this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
                                data => {
                                    for (let i = this.correctMistakeNumber; i < data.libelle.length; i++) {
                                        if (data.libelle[i] == ' ') {
                                            this.correctMistakeNumber = i;
                                            this.questionanswers.push(this.word);
                                            this.j = this.j + 1;
                                            this.numberofword.push(this.j.toString());
                                            this.word = '';
                                            continue;
                                        } else {
                                            this.word = this.word + data.libelle[i];
                                        }
                                        if (i == data.libelle.length - 1) {
                                            this.questionanswers.push(this.word);
                                            this.j = this.j + 1;
                                            this.numberofword.push(this.j.toString());
                                            this.word = '';
                                            continue;
                                        }
                                    }
                                    this.correctMistakeNumber = 0;
                                    this.word = '';
                                    this.service.findMyAnswerEtudiant(this.quizEtudiant, this.selected).subscribe(
                                        data => {
                                            this.myAnswerEtudiant = data;
                                            for (let i = this.correctMistakeNumber; i < this.myAnswerEtudiant[0].answer.length; i++) {
                                                if (this.myAnswerEtudiant[0].answer[i] == ' ') {
                                                    this.correctMistakeNumber = i;
                                                    this.myanswers.push(this.word);
                                                    this.word = '';
                                                    continue;
                                                } else {
                                                    this.word = this.word + this.myAnswerEtudiant[0].answer[i];
                                                }
                                                if (i == this.myAnswerEtudiant[0].answer.length - 1) {
                                                    this.myanswers.push(this.word);
                                                    this.word = '';
                                                    continue;
                                                }
                                            }
                                        });
                                    //this.isChecked = true;
                                    for (let i = 0; i < this.myanswers.length; i++) {

                                        if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] == this.questionanswers[i]) {
                                            this.answerCorrectOrFalse.push(true);
                                            document.getElementById('span-output-' + i).style.color = '#0a80bb';
                                            document.getElementById('span-output-' + i).style.textDecoration = 'none';
                                            document.getElementById('span-correct-' + i).style.visibility = 'hidden';
                                        } else if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] != this.questionanswers[i]) {
                                            this.answerCorrectOrFalse.push(true);
                                            document.getElementById('span-output-' + i).style.color = '#1af045';
                                            document.getElementById('span-output-' + i).style.textDecoration = 'none';
                                            document.getElementById('span-correct-' + i).style.visibility = 'hidden';
                                        } else {
                                            this.answerCorrectOrFalse.push(false);
                                            document.getElementById('span-output-' + i).style.color = 'red';
                                            document.getElementById('span-output-' + i).style.textDecoration = 'line-through';
                                            document.getElementById('span-correct-' + i).style.visibility = 'visible';
                                        }
                                    }
                                    this.service.translate(this.correctAnswers[0].lib).subscribe(
                                        data => {
                                            this.translate = data;
                                            console.log(this.translate);
                                        }
                                    );
                                    document.getElementById('translate-correct-mistake').style.visibility = 'visible';
                                }
                            );
                            //this.isChecked = false;
                        }




                        else if (this.selected.typeDeQuestion.ref == 't5') {
                            for(let i = 0 ; i < this.myanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.correctMistakeAnswer = null;
                            if(this.correctAnswers[0].lib == 'true'){
                                this.on_off = true;
                            }
                            else if(this.correctAnswers[0].lib == 'false'){
                                this.on_off = false;
                            }
                            this.service.translate(this.selected.libelle).subscribe(
                                data => {
                                    this.translate = data;
                                }
                            );
                            document.getElementById('on-off-question').style.visibility = 'visible';
                            document.getElementById('on-off-question').style.height = 'auto';
                            document.getElementById('on-off-answer').style.visibility = 'visible';
                            document.getElementById('on-off-answer').style.height = 'auto';
                            document.getElementById('translate-on-off').style.visibility = 'visible';
                            document.getElementById('question-on-off').style.color = 'black';
                            document.getElementById('mistake').style.visibility = 'hidden';
                            document.getElementById('mistake').style.height = '0px';
                            document.getElementById('question').style.visibility = 'hidden';
                            document.getElementById('question').style.height = '0px';
                            document.getElementById('answers').style.visibility = 'hidden';
                            document.getElementById('answers').style.height = '0px';
                            document.getElementById('div-output').style.visibility = 'hidden';
                            document.getElementById('output-correct-mistake').style.visibility = 'hidden';
                            this.answerCorrectOrFalse = new Array<boolean>();
                            for(let i = 0 ; i < this.questionanswers.length ; i++)
                            {
                                this.answerCorrectOrFalse.push(true);
                            }
                            this.isChecked = false;
                        }
                    }
                );
            }
        );
    }


    public findByWord(){
        this.dictionnaryService.FindByWord(this.wordDictionnary).subscribe(
            data=>{
                this.selectedDict = data;
                //document.getElementById('dictionary').style.visibility = 'visible';
            },error => console.log('erreeeeeeeeeeeeeeeeur') );
        //document.getElementById('dictionary').style.visibility = 'visible';
    }

    filterDict(event) {
        const filtered: any[] = [];
        const query = event.query;

        // tslint:disable-next-line:prefer-for-of
        for(let i = 0; i < this.itemsDict.length; i++) {
            const dict = this.itemsDict[i];
            // tslint:disable-next-line:triple-equals
            if (dict.word.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(dict);
            }
        }

        this.filteredDict = filtered;
    }

    public openCreateDict() {
        this.submittedDict = false;
        this.createDialogDict = true;
        this.selectedDict = new Dictionary();
    }

    public Section(libelle: string){
        this.service.findQuizEtudiant(this.etudiant, this.selectedQuiz).subscribe(
            data => {
                this.quizEtudiant = data;
                this.quizEtudiant.note = this.noteQuiz;
                this.quizEtudiant.questionCurrent = this.numQuestion;
                this.service.updateQuizEtudiant().subscribe();
            }
        );
        this.parcoursservice.afficheSection(libelle).subscribe(
            data=> {
                this.selectedsection = data;
                this.service.findQuizBySectionId(this.selectedsection).subscribe(
                    data => {
                        this.selectedQuiz = data;
                        this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
                            data => {
                                this.quizEtudiantList = data;
                                this.passerQuiz = 'View Quiz';
                                this.quizView = true;
                            },error =>
                            {
                                this.passerQuiz = 'Passer Quiz';
                                this.quizView = false;
                            }
                        );
                    },
                );
            },error => console.log('erreeeeeeeeeeeeeeeeur') );
        this.router.navigate(['/pages/etudiantsimulatesections']);
    }

    public dictEdit(dict: Dictionary){
        this.selectedDictionnary = dict;
        if(this.selectedDictionnary.word != null){
            this.submittedDictEdit = false;
            this.editDialogDict = true;
        }
    }

    restart(){

    }
    public restartQuiz(){
        this.service.deleteQuizEtudiant(this.quizEtudiant).subscribe(
            data => {
                document.getElementById('result').style.visibility = 'hidden';
                document.getElementById('question').style.height = 'auto';
                document.getElementById('answers').style.height = 'auto';
                document.getElementById('mistake').style.height = 'auto';
                document.getElementById('header').style.visibility = 'visible';
                document.getElementById('bodyRadio').style.visibility = 'visible';
                document.getElementById('bodyRadio').style.height = 'auto';
                this.quizEtudiant = new QuizEtudiant();
                this.numQuestion = 0;
                this.noteQuiz = 0;
                this.etudiant = this.login.etudiant;
                this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
                    data => {
                        this.items = data;
                    }
                );
                this.quizEtudiant.quiz = this.selectedQuiz;
                this.quizEtudiant.resultat = null;
                this.quizEtudiant.note = 0;
                this.quizEtudiant.etudiant = this.login.etudiant;
                this.service.findQuizEtudiant(this.etudiant, this.selectedQuiz).subscribe(
                    data => {
                        this.quizEtudiant = data;
                        this.quizEtudiant.id = data.id;
                        this.numQuestion = data.questionCurrent - 1;
                        this.noteQuiz = data.note;
                        this.start();
                    }, error => {
                        this.service.insertQuizEtudiant().subscribe();
                        this.start();
                    }
                );
                this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
            }
        );
    }

    NextSection() {
        this.parcoursservice.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder <= this.itemssection2.length) {
            this.parcoursservice.afficheOneSection2().subscribe(
                data => {
                    this.selectedsection = data;
                    this.service.findQuizBySectionId(this.selectedsection).subscribe(
                        data => {
                            this.selectedQuiz = data;

                            this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
                                data => {
                                    this.quizEtudiantList = data;
                                    this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
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
            this.router.navigate(['/pages/etudiantsimulatesections']);
        } /*else {
      this.selectedsection.numeroOrder = 0;
      this.PreviousSection();
    }*/
    }

    findQuestionByNumber(numero: number) {
        this.numQuestion = numero - 1;
        this.start();
    }

    public sound(word: string){
        const text = encodeURIComponent(word);
        const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
        const audio = new Audio(url);
        audio.play();
    }

    openUpdate() {
        this.router.navigate(['/pages/quiz-update']);
    }

    viewQuizEtudiant() {
        this.router.navigate(['/pages/view-quiz-etudiant']);
    }

    backToParcoursList() {
        if (this.login.prof.nom != null) {
            this.router.navigate(['/pages/courses']);
        } else {
            this.router.navigate(['/pages/parcours']);
        }
    }
}
