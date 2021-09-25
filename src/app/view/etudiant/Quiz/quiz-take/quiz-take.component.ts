import { Component, OnInit } from '@angular/core';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../../controller/service/login.service';
import {Reponse} from '../../../../controller/model/reponse.model';
import {ReponseEtudiant} from '../../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {Question} from '../../../../controller/model/question.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {Router} from '@angular/router';
import {DictionaryService} from '../../../../controller/service/dictionary.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {EtudiantCours} from '../../../../controller/model/etudiant-cours.model';
import {Section} from '../../../../controller/model/section.model';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.scss']
})
export class QuizTakeComponent implements OnInit {

  textSeleted: string;

  synonym: any[];
  value = 0;

  wordDict: any;
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
  debutPlaceholder = 0;
  finPlaceholder = 0;
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
  k: number;
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
  placeholderTypeInput: string;
  reponseInput: string;
  disableInput = true;
  input_true_false: boolean;
  string_input = '';
  son = '';

  get listSynonymes(): Array<any> {
    return this.dictionnaryService.listSynonymes;
  }

  set listSynonymes(value: Array<any>) {
    this.dictionnaryService.listSynonymes = value;
  }
  get TranslateSynonymeDialog(): boolean {
    return this.dictionnaryService.TranslateSynonymeDialog;
  }

  set TranslateSynonymeDialog(value: boolean) {
    this.dictionnaryService.TranslateSynonymeDialog = value;
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
    this.dictionnaryService.selected = new Dictionary();

    this.dictionnaryService.FindByWord(this.textSeleted).subscribe(
        data => {
          this.dictionnaryService.selected = data;
          this.wordDict = '';
          this.dictionnaryService.listSynonymes = new Array<any>();
          // tslint:disable-next-line:triple-equals no-unused-expression
          if (this.textSeleted.length != 0 && this.dictionnaryService.selected.word == null) {
            this.dictionnaryService.Translate(this.textSeleted).subscribe(
                data => {
                  this.dictionnaryService.Synonymes = data;
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
            this.dictionnaryService.selected.word = this.textSeleted;
            this.submittedDict = false;
            this.TranslateSynonymeDialog = true;
            // tslint:disable-next-line:triple-equals
          } else if (this.textSeleted.length != 0 && this.dictionnaryService.selected.word != null) {
            this.dictionnaryService.selected.word = this.textSeleted;
            this.submittedDictEdit = false;
            this.editDialogDict = true;
          }
        });
  }
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
    this.quizEtudiant = new QuizEtudiant();
    this.numQuestion = 0;
    this.noteQuiz = 0;
    this.etudiant = this.login.etudiant;
    this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
        data => {
          this.items = data;
          for(let i = 0 ; i < data.length ; i++)
          {
            this.totalNote += data[i].pointReponseJuste;
          }
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
    this.dictionnaryService.FindAllWord().subscribe(
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
    ];
  }

  //////////////////Start/////////
  public start() {
    this.trueAnswerCorrectMistake = '';
    this.myAnswerCorrectMistake = '';
    this.answerCorrect = '';
    this.disable = false;
    this.isChecked = false;
    this.next = false;
    this.on_off = false;
    this.input_true_false = true;
    this.disableInput = false;
    this.answerCorrectOrFalse = new Array<boolean>();
    document.getElementById('translate-correct-mistake').style.visibility = 'hidden';
    document.getElementById('check-input').style.visibility = 'hidden';
    this.translate = '';
    document.getElementById('myAnswer').style.textDecoration = 'none';
    document.getElementById('tooltiptext').style.visibility = 'hidden';
    if (this.numQuestion > 0) {
      if (this.selected.typeDeQuestion.ref == 't4') {
        if (this.correctMistakeAnswer == this.correctAnswers[0].lib) {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.noteQst = this.selected.pointReponseJuste;
        } else {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.noteQst = this.selected.pointReponsefausse;
        }
      }

      this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
          dataQuizEtudiant => {
            this.reponseEtudiant.note = this.noteQst;
            this.reponseEtudiant.quizEtudiant = dataQuizEtudiant;
            console.log(this.reponseEtudiant);
            this.service.insertReponseEtudiant(this.reponseEtudiant).subscribe();
          }
      );
    }
    this.numQuestion = this.numQuestion + 1;
    console.log(this.numQuestion);
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
      document.getElementById('result').style.visibility = 'visible';
      document.getElementById('question').style.visibility = 'hidden';
      document.getElementById('question').style.height = '0px';
      document.getElementById('answers').style.visibility = 'hidden';
      document.getElementById('answers').style.height = '0px';
      document.getElementById('type-input').style.visibility = 'hidden';
      document.getElementById('type-input').style.height = '0px';
      document.getElementById('mistake').style.visibility = 'hidden';
      document.getElementById('mistake').style.height = '0px';
      document.getElementById('header').style.visibility = 'hidden';
      document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
      document.getElementById('div-output').style.visibility = 'hidden';
      document.getElementById('output-correct-mistake').style.visibility = 'hidden';
      document.getElementById('on-off-question').style.visibility = 'hidden';
      document.getElementById('on-off-question').style.height = '0px';
      document.getElementById('on-off-answer').style.visibility = 'hidden';
      document.getElementById('on-off-answer').style.height = '0px';
      document.getElementById('check-on-off').style.visibility = 'hidden';
      document.getElementById('check-correct-mistake').style.visibility = 'hidden';

      this.isChecked = false;
      this.service.findQuizEtudiant(this.etudiant, this.selectedQuiz).subscribe(
          data => {
            this.quizEtudiant = data;
            this.quizEtudiant.note = this.noteQuiz;
            if (this.noteQuiz >= this.selectedQuiz.seuilReussite) {
              this.quizEtudiant.resultat = 'validé';
              this.resultat = 'Congratulation for pass this quiz';
              this.image = 'data:image/png;base64,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';
            } else {
              this.quizEtudiant.resultat = 'non validé';
              this.resultat = 'Don\'t worry, you can restart this quiz';
              this.image = 'data:image/png;base64,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';
            }
            this.quizEtudiant.note = this.noteQuiz;
            this.quizEtudiant.id = this.quizEtudiant.id;
            this.quizEtudiant.questionCurrent = this.numQuestion;
            this.service.updateQuizEtudiant().subscribe();
          }
      );
    }
    this.button = 'Don\'t know';
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
              }
          );
          if (this.selected.typeDeQuestion.ref == 't1') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.question1 = '';
            this.question2 = '';
            this.answer = '___';
            document.getElementById('myAnswer').style.color = 'black';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('question').style.visibility = 'visible';
            document.getElementById('question').style.height = 'auto';
            document.getElementById('answers').style.visibility = 'visible';
            document.getElementById('answers').style.height = 'auto';
            document.getElementById('on-off-question').style.visibility = 'hidden';
            document.getElementById('on-off-question').style.height = '0px';
            document.getElementById('on-off-answer').style.visibility = 'hidden';
            document.getElementById('on-off-answer').style.height = '0px';
            document.getElementById('type-input').style.visibility = 'hidden';
            document.getElementById('type-input').style.height = '0px';
            document.getElementById('check-on-off').style.visibility = 'hidden';
            document.getElementById('check-correct-mistake').style.visibility = 'hidden';
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

            }
            for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
              this.question2 = this.question2 + this.selected.libelle[i];
            }
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
          }
          else if (this.selected.typeDeQuestion.ref == 't3') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.question1 = '';
            this.question2 = '';
            this.answer = '_____';
            this.placeholderTypeInput = '';
            this.reponseInput = '';
            this.disableInput = false;
            this.input_true_false = true;
            document.getElementById('type-input').style.visibility = 'visible';
            document.getElementById('type-input').style.height = 'auto';
            document.getElementById('type-question-input').style.color = '#0a80bb';
            document.getElementById('type-question-input').style.textDecoration = 'none';
            document.getElementById('type-question-input').style.color = '#0a80bb';
            document.getElementById('check-input').style.visibility = 'visible';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('on-off-question').style.visibility = 'hidden';
            document.getElementById('on-off-question').style.height = '0px';
            document.getElementById('on-off-answer').style.visibility = 'hidden';
            document.getElementById('on-off-answer').style.height = '0px';
            document.getElementById('check-on-off').style.visibility = 'hidden';
            document.getElementById('check-correct-mistake').style.visibility = 'hidden';
            this.isSelected = false;
            for (let i = 0; i < this.selected.libelle.length; i++) {
              if (this.selected.libelle[i] == '.' && this.selected.libelle[i + 1] == '.' && this.selected.libelle[i + 2] == '.') {
                this.debutBlink = i;
                for (let j = i + 2; j < this.selected.libelle.length; j++) {
                  if (this.selected.libelle[j] != '.') {
                    this.debutPlaceholder = j;
                    break;
                  }
                }
                for (let j = this.debutPlaceholder; j < this.selected.libelle.length; j++) {
                  if (this.selected.libelle[j] == '.') {
                    this.finPlaceholder = j;
                    break;
                  }
                }
                for (let j = this.finPlaceholder; j < this.selected.libelle.length; j++) {
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
            }
            for (let i = this.debutPlaceholder; i < this.finPlaceholder; i++) {
              this.placeholderTypeInput = this.placeholderTypeInput + this.selected.libelle[i];
            }
            for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
              this.question2 = this.question2 + this.selected.libelle[i];
            }
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
          }
          else if (this.selected.typeDeQuestion.ref == 't4') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.correctMistakeAnswer = null;
            document.getElementById('mistake').style.visibility = 'visible';
            document.getElementById('mistake').style.height = 'auto';
            document.getElementById('check-correct-mistake').style.visibility = 'visible';
            document.getElementById('type-input').style.visibility = 'hidden';
            document.getElementById('type-input').style.height = '0px';
            document.getElementById('on-off-question').style.visibility = 'hidden';
            document.getElementById('on-off-question').style.height = '0px';
            document.getElementById('on-off-answer').style.visibility = 'hidden';
            document.getElementById('on-off-answer').style.height = '0px';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('float-input-correct-mistake').style.visibility = 'visible';
            document.getElementById('div-output').style.visibility = 'hidden';
            document.getElementById('output-correct-mistake').style.visibility = 'hidden';
            document.getElementById('check-on-off').style.visibility = 'hidden';
            this.answerCorrectOrFalse = new Array<boolean>();
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.isChecked = false;
          }
          else if (this.selected.typeDeQuestion.ref == 't5') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.correctMistakeAnswer = null;
            document.getElementById('on-off-question').style.visibility = 'visible';
            document.getElementById('on-off-question').style.height = 'auto';
            document.getElementById('on-off-answer').style.visibility = 'visible';
            document.getElementById('on-off-answer').style.height = 'auto';
            document.getElementById('question-on-off').style.color = 'black';
            document.getElementById('check-on-off').style.visibility = 'visible';
            document.getElementById('type-input').style.visibility = 'hidden';
            document.getElementById('type-input').style.height = '0px';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
            document.getElementById('div-output').style.visibility = 'hidden';
            document.getElementById('output-correct-mistake').style.visibility = 'hidden';
            document.getElementById('check-correct-mistake').style.visibility = 'hidden';
            this.answerCorrectOrFalse = new Array<boolean>();
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.isChecked = false;
          }
        }
    );
    this.service.findQuizEtudiant(this.etudiant, this.selectedQuiz).subscribe(
        data => {
          this.quizEtudiant = data;
          this.quizEtudiant.note = this.noteQuiz;
          this.quizEtudiant.questionCurrent = this.numQuestion;
          this.service.updateQuizEtudiant().subscribe();
        }
    );
  }


/////////////////////// radio ///////////////
  public selectionChanged(event: any, reponse: Reponse): void {
    this.next = true;
    if (this.selected.typeDeQuestion.ref == 't1') {
      this.question1 = '';
      this.question2 = '';
      this.question = '';
      this.answer = reponse.lib;
      this.button = 'Next';
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
          data => {
            this.selected = data;
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
            this.son = this.question;
            this.service.translate(this.question).subscribe(
                data => {
                  this.translate = data;
                }
            );
          }
      );
      if (this.correctAnswers[0].id == reponse.id) {
        document.getElementById('myAnswer').style.color = '#1af045';
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponseJuste;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.isSelected = true;
        }
      } else {
        document.getElementById('myAnswer').style.color = 'red';
        document.getElementById('myAnswer').style.textDecoration = 'line-through';
        document.getElementById('tooltiptext').style.visibility = 'visible';
        this.answerCorrect = this.correctAnswers[0].lib;
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponsefausse;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.isSelected = true;
        }
      }
      this.reponseEtudiant.reponse = reponse;
      this.reponseEtudiant.question = this.selected;
      this.reponseEtudiant.answer = null;
      this.disable = true;
    }
    document.getElementById('output-correct-mistake').style.visibility = 'hidden';
  }

  ///////////////// correct mistake /////////
  checkCorrectMistake() {
    if(this.selected.typeDeQuestion.ref == 't3')
    {
      if(this.correctAnswers[0].lib == this.reponseInput)
      {
        this.noteQst = this.selected.pointReponseJuste;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
        this.reponseEtudiant.note = this.selected.pointReponseJuste;
        this.input_true_false = true;
        document.getElementById('type-question-input').style.color = '#1af045';
        document.getElementById('type-question-input').style.textDecoration = 'none';
      }
      else {
        this.noteQst = this.selected.pointReponsefausse;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
        this.reponseEtudiant.note = this.selected.pointReponsefausse;
        this.input_true_false = false;
        document.getElementById('type-question-input').style.color = 'red';
        document.getElementById('type-question-input').style.textDecoration = 'line-through';
      }
      this.disable = true;
      this.disableInput = true;
      this.button = 'Next';
      document.getElementById('check-input').style.visibility = 'hidden';
      this.reponseEtudiant.reponse = null;
      this.reponseEtudiant.answer = this.reponseInput;
      this.reponseEtudiant.question = this.selected;
      this.string_input = '';
      for (let i = 0; i < this.selected.libelle.length; i++) {
        if (this.selected.libelle[i] == '.' && this.selected.libelle[i + 1] == '.' && this.selected.libelle[i + 2] == '.') {
          this.debutBlink = i;
          for (let j = i + 2; j < this.selected.libelle.length; j++) {
            if (this.selected.libelle[j] != '.') {
              this.debutPlaceholder = j;
              break;
            }
          }
          for (let j = this.debutPlaceholder; j < this.selected.libelle.length; j++) {
            if (this.selected.libelle[j] == '.') {
              this.finPlaceholder = j;
              break;
            }
          }
          for (let j = this.finPlaceholder; j < this.selected.libelle.length; j++) {
            if (this.selected.libelle[j] != '.') {
              this.finBlink = j;
              break;
            }
          }
          break;
        }
      }
      for (let i = 0; i < this.debutBlink; i++) {
        this.string_input = this.string_input + this.selected.libelle[i];
      }
      this.string_input = this.string_input + this.correctAnswers[0].lib;
      for (let i = this.debutPlaceholder; i < this.finPlaceholder; i++) {
      }
      console.log(this.placeholderTypeInput)
      for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
        this.string_input = this.string_input + this.selected.libelle[i];
      }
      this.son = this.string_input;
      this.service.translate(this.string_input).subscribe(
          data => {
            this.translate = data;
          }
      );
    }
    if(this.selected.typeDeQuestion.ref == 't4')
    {
      this.check();
      this.check();
    }
    else if (this.selected.typeDeQuestion.ref == 't5')
    {
      this.next = true;
      this.button = 'Next';
      if((this.on_off == true && this.correctAnswers[0].lib == 'true') || (this.on_off == false && this.correctAnswers[0].lib == 'false'))
      {
        document.getElementById('question-on-off').style.color = '#1af045';
        this.noteQst = this.selected.pointReponseJuste;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
        this.reponseEtudiant.note = this.selected.pointReponseJuste;
        this.service.findReponses(this.selected.id).subscribe(
            dataAnswers => {
              this.reponseEtudiant.reponse = dataAnswers[0];
            }
        );
        this.reponseEtudiant.answer = null;
      }
      else {
        document.getElementById('question-on-off').style.color = 'red';
        this.noteQst = this.selected.pointReponsefausse;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
        this.reponseEtudiant.note = this.selected.pointReponsefausse;
        this.service.findReponses(this.selected.id).subscribe(
            dataAnswers => {
              this.reponseEtudiant.reponse = dataAnswers[1];
            }
        );
        this.reponseEtudiant.answer = null;
      }
      this.son = this.selected.libelle;
      this.service.translate(this.selected.libelle).subscribe(
          data => {
            this.translate = data;
          }
      );
      this.disable = true;
      this.reponseEtudiant.reponse = null;
      this.reponseEtudiant.answer = this.correctMistakeAnswer;
      this.reponseEtudiant.question = this.selected;
      document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
      document.getElementById('div-output').style.visibility = 'visible';
      document.getElementById('div-output').style.marginTop = '-100px';
      document.getElementById('check-on-off').style.visibility = 'hidden';
      document.getElementById('check-correct-mistake').style.visibility = 'hidden';
    }
  }



  check() {
    this.next = true;
    this.j = -1;
    this.word = '';
    this.myanswers = new Array<string>();
    this.correctanswers = new Array<string>();
    this.questionanswers = new Array<string>();
    this.numberofword = new Array<string>();
    this.correctMistakeNumber = 0;
    if (this.selected.typeDeQuestion.ref == 't4') {
      this.correctMistakeAnswer = this.selected.libelle;
      if (this.correctMistakeAnswer == this.correctAnswers[0].lib) {
        this.trueAnswerCorrectMistake = this.correctMistakeAnswer;
      } else {
        this.trueAnswerCorrectMistake = this.correctAnswers[0].lib;
        this.myAnswerCorrectMistake = this.correctMistakeAnswer;
      }
      /////////////////////// my answer ///////////
      for (let i = this.correctMistakeNumber; i < this.correctMistakeAnswer.length; i++) {
        if (this.correctMistakeAnswer[i] == ' ') {
          this.correctMistakeNumber = i;
          this.myanswers.push(this.word);
          this.j = this.j + 1;
          this.numberofword.push(this.j.toString());
          this.word = '';
          continue;
        } else {
          this.word = this.word + this.correctMistakeAnswer[i];
        }
        if (i == this.correctMistakeAnswer.length - 1) {
          this.myanswers.push(this.word);
          this.j = this.j + 1;
          this.numberofword.push(this.j.toString());
          this.word = '';
          continue;
        }
      }
      this.correctMistakeNumber = 0;
      this.word = '';


      /////////////////////// correct answer ///////////
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


      /////////////////////// question ///////////
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
          data => {
            for (let i = this.correctMistakeNumber; i < data.libelle.length; i++) {
              if (data.libelle[i] == ' ') {
                this.correctMistakeNumber = i;
                this.questionanswers.push(this.word);
                this.word = '';
                continue;
              } else {
                this.word = this.word + data.libelle[i];
              }
              if (i == data.libelle.length - 1) {
                this.questionanswers.push(this.word);
                this.word = '';
                continue;
              }
            }
            this.isChecked = true;
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
          }
      );
    }
    this.son = this.correctAnswers[0].lib;
    this.service.translate(this.correctAnswers[0].lib).subscribe(
        data => {
          this.translate = data;
        }
    );
    this.disable = true;
    this.reponseEtudiant.reponse = null;
    this.reponseEtudiant.answer = this.correctMistakeAnswer;
    this.reponseEtudiant.question = this.selected;
    document.getElementById('translate-correct-mistake').style.visibility = 'visible';
    document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
    document.getElementById('div-output').style.visibility = 'visible';
    document.getElementById('div-output').style.marginTop = '-100px';
    document.getElementById('check-on-off').style.visibility = 'hidden';
    document.getElementById('check-correct-mistake').style.visibility = 'hidden';
  }



  correctMistake() {
    if (this.correctMistakeAnswer == this.selected.libelle) {
      this.button = 'Don\'t know';
    } else if (this.correctMistakeAnswer != this.selected.libelle && this.selected.libelle.length > 0) {
      this.button = 'Next';
    }
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
                        console.log(this.quizEtudiantList);
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

  public sound(){
    const text = encodeURIComponent(this.son);
    //const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
    const url = 'https://www.translatedict.com/speak.php?word='+this.son+'&lang=en';
    const audio = new Audio(url);
    audio.play();
  }


}
