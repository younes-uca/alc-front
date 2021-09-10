/* tslint:disable:triple-equals prefer-for-of variable-name align */
import {Component, OnInit} from '@angular/core';
import {Question} from '../../../../controller/model/question.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {Reponse} from '../../../../controller/model/reponse.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../../controller/service/login.service';
import {ReponseEtudiant} from '../../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';

@Component({
    selector: 'app-quiz-preview',
    templateUrl: './quiz-preview.component.html',
    styleUrls: ['./quiz-preview.component.scss']
})
export class QuizPreviewComponent implements OnInit {

    /*constructor(private service: QuizEtudiantService, private login: LoginService, private router: Router, private servicequiz: QuizService) { }

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
    private _numeroQuestion : number;

    get refQuiz(): string {
      return this.servicequiz.refQuiz;
    }

    set refQuiz(value: string) {
      this.servicequiz.refQuiz = value;
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
      if(this._selectedValueCheckbox == null)
      {
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

    ///////////////////////////// Next() //////////////////////
    public next()
    {
      this.numeroCheckBox = 0;

      this.numQuestion = this.numQuestion + 1;
      this.service.findQuestion(this.refQuiz, this.numQuestion).subscribe(
          data => {
            this.selected = data;
            if(this.selected.typeDeQuestion.ref == 't1')
            {
              this.type = 'radio';
            }
            else if(this.selected.typeDeQuestion.ref == 't2')
            {
              this.type = 'checkbox';
            }
            this.service.findReponses(this.selected.id).subscribe(
                data => {
                  this.reponses = data;
                }
            );
          }
      );
      if (this.numQuestion == this.items.length)
      {
        this.button = 'Finish the test';
      }
      else if (this.numQuestion > this.items.length)
      {
        document.getElementById('finish').style.visibility = 'visible';
        document.getElementById('btn-next').style.visibility = 'hidden';
        document.getElementById('question').remove();

        this.quizEtudiant.note = this.noteQuiz;
        if (this.noteQuiz >= this.selectedQuiz.seuilReussite)
        {
          this.quizEtudiant.resultat = 'validé';
          document.getElementById('congratulations').style.visibility = 'visible';
          document.getElementById('hard-luck').style.visibility = 'hidden';
        }
        else if (this.noteQuiz < this.selectedQuiz.seuilReussite)
        {
          this.quizEtudiant.resultat = 'non validé';
          document.getElementById('congratulations').style.visibility = 'hidden';
          document.getElementById('hard-luck').style.visibility = 'visible';
        }
      }
    }

    public start()
    {
      this.noteQuiz = 0;
      document.getElementById('start').remove();
      document.getElementById('question').style.visibility = 'visible';
      document.getElementById('quiz').style.backgroundColor = 'white';
      document.getElementById('btn-next').style.visibility = 'visible';
      this.button = 'Next';
      this.numeroQuestion = this.numQuestion + 1;
      console.log(this.refQuiz);
      this.service.findQuestion(this.refQuiz, this.numQuestion).subscribe(
          data => {
            this.selected = data;
            if(this.selected.typeDeQuestion.ref == 't1')
            {
              this.type = 'radio';
            }
            else if(this.selected.typeDeQuestion.ref == 't2')
            {
              this.type = 'checkbox';
            }
            this.service.findReponses(this.selected.id).subscribe(
                data => {
                  this.reponses = data;
                }
            );
            this.service.findCorrectAnswers(this.selected.id).subscribe(
                data => {
                  this.correctAnswers = data;
                }
            );
          }
      );

    }

    public selectionChanged(event: any,reponse: Reponse): void
    {
      if(this.selected.typeDeQuestion.ref == 't1')
      {
        this.selectedValue = reponse.id;
        for(let i=0 ; i < this.reponses.length ; i++)
        {
          if(reponse.id == this.reponses[i].id)
          {
            document.getElementById('div-' + this.reponses[i].id).style.backgroundColor = '#598e8f';
            document.getElementById('div-' + this.reponses[i].id).style.width = '320px';
            document.getElementById('div-' + this.reponses[i].id).style.height = '43px';
          }
          else {
            document.getElementById('div-' + this.reponses[i].id).style.backgroundColor = '#90eef0';
            document.getElementById('div-' + this.reponses[i].id).style.width = '300px';
            document.getElementById('div-' + this.reponses[i].id).style.height = '40px';
          }
        }
      }
      else if (this.selected.typeDeQuestion.ref == 't2')
      {
        if(event.target.checked)
        {
          if(this.selectedValueCheckbox.length > 0)
          {
            this.service.findMyReponseEtudiant(this.quizEtudiant, this.selectedValueCheckbox[0]).subscribe(
                data => {
                  this.selectedValueCheckbox = null;
                }
            );
          }
          this.selectedValueCheckbox.push(reponse);
          document.getElementById('div-' + reponse.id).style.backgroundColor = '#598e8f';
          document.getElementById('div-' + reponse.id).style.width = '320px';
          document.getElementById('div-' + reponse.id).style.height = '43px';
        }
        else
        {
          this.selectedValueCheckbox = this.selectedValueCheckbox.filter(m=>m!=reponse);
          document.getElementById('div-' + reponse.id).style.backgroundColor = '#90eef0';
          document.getElementById('div-' + reponse.id).style.width = '300px';
          document.getElementById('div-' + reponse.id).style.height = '40px';
        }
      }
    }

    ngOnInit(): void {

      console.log(this.refQuiz);
      this.numQuestion = 1;
      this.etudiant = this.login.etudiant;
      this.service.findAllQuestions(this.refQuiz).subscribe(
          data => {
            this.items = data;
          }
      );
    }*/

    question1 = '';
    question2 = '';
    debutBlink = 0;
    finBlink = 0;
    answer = '_____';
    answerCorrect = '';
    isSelected: boolean;
    correctMistakeAnswer: string;
    myAnswerCorrectMistake: string;
    trueAnswerCorrectMistake: string;
    image: string;
    ref: string;
    private selectedValue: number;

    constructor(private service: QuizEtudiantService, private login: LoginService, private router: Router, private servicequiz: QuizService) {
    }

    private _selectedValueCheckbox: Array<Reponse>;

    get selectedValueCheckbox(): Array<Reponse> {
        if (this._selectedValueCheckbox == null) {
            this._selectedValueCheckbox = new Array<Reponse>();
        }
        return this._selectedValueCheckbox;
    }

    set selectedValueCheckbox(value: Array<Reponse>) {
        this._selectedValueCheckbox = value;
    }

    private _type: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    private _button: string;

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    private _radio: string;

    get radio(): string {
        return this._radio;
    }

    set radio(value: string) {
        this._radio = value;
    }

    private _checkbox: string;

    get checkbox(): string {
        return this._checkbox;
    }

    set checkbox(value: string) {
        this._checkbox = value;
    }

    private _noteQst: number;

    get noteQst(): number {
        return this._noteQst;
    }

    set noteQst(value: number) {
        this._noteQst = value;
    }

    private _noteQuiz: number;

    get noteQuiz(): number {
        return this._noteQuiz;
    }

    set noteQuiz(value: number) {
        this._noteQuiz = value;
    }

    private _noteCheckbox: number;

    get noteCheckbox(): number {
        return this._noteCheckbox;
    }

    set noteCheckbox(value: number) {
        this._noteCheckbox = value;
    }

    private _numeroCheckBox: number;

    get numeroCheckBox(): number {
        return this._numeroCheckBox;
    }

    set numeroCheckBox(value: number) {
        this._numeroCheckBox = value;
    }

    private _numeroQuestion: number;

    get numeroQuestion(): number {
        return this._numeroQuestion;
    }

    set numeroQuestion(value: number) {
        this._numeroQuestion = value;
    }

    private _disable: boolean;

    get disable(): boolean {
        return this._disable;
    }

    set disable(value: boolean) {
        this._disable = value;
    }

    get refQuiz(): string {
        return this.servicequiz.refQuiz;
    }

    set refQuiz(value: string) {
        this.servicequiz.refQuiz = value;
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

    get correctAnswers(): Array<Reponse> {
        return this.service.correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this.service.correctAnswers = value;
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


    public start() {
        this.numQuestion = this.numQuestion + 1;
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.items = data;
            }
        );
        if (this.numQuestion > this.items.length && this.numQuestion > 1) {
            document.getElementById('result').style.visibility = 'visible';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('header').style.visibility = 'hidden';
            document.getElementById('bodyRadio').style.visibility = 'hidden';
            document.getElementById('bodyRadio').style.height = '0px';
            document.getElementById('result').style.marginTop = '-200px';
            document.getElementById('button-next').style.visibility = 'hidden';
        }
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
                        this.selectedValue = data[0].id;
                        if (this.selected.typeDeQuestion.ref == 't4') {
                            this.trueAnswerCorrectMistake = data[0].lib;
                        }
                    }
                );
                if (this.selected.typeDeQuestion.ref == 't1') {
                    this.question1 = '';
                    this.question2 = '';
                    this.answer = '_____';
                    document.getElementById('mistake').style.visibility = 'hidden';
                    document.getElementById('mistake').style.height = '0px';
                    document.getElementById('question').style.visibility = 'visible';
                    document.getElementById('question').style.height = 'auto';
                    document.getElementById('answers').style.visibility = 'visible';
                    document.getElementById('answers').style.height = 'auto';
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
                } else if (this.selected.typeDeQuestion.ref == 't4') {
                    this.correctMistakeAnswer = null;
                    document.getElementById('mistake').style.visibility = 'visible';
                    document.getElementById('mistake').style.height = 'auto';
                    document.getElementById('question').style.visibility = 'hidden';
                    document.getElementById('question').style.height = '0px';
                    document.getElementById('answers').style.visibility = 'hidden';
                    document.getElementById('answers').style.height = '0px';
                }
            }
        );
    }

    ngOnInit(): void {
        this.numQuestion = 0;
        this.etudiant = this.login.etudiant;
        this.service.findAllQuestions(this.refQuiz).subscribe(
            data => {
                this.items = data;
            }
        );
        this.start();
    }

    findQuestionByNumber(numero: number) {
        this.numQuestion = numero;
        document.getElementById('result').style.visibility = 'hidden';
        document.getElementById('button-next').style.visibility = 'visible';
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.items = data;
            }
        );
        if (this.numQuestion > this.items.length && this.numQuestion > 1) {
            document.getElementById('result').style.visibility = 'visible';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('header').style.visibility = 'hidden';
            document.getElementById('bodyRadio').style.visibility = 'hidden';
            document.getElementById('bodyRadio').style.height = '0px';
            document.getElementById('result').style.marginTop = '-200px';
            document.getElementById('button-next').style.visibility = 'hidden';
        }
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
                        this.selectedValue = data[0].id;
                        if (this.selected.typeDeQuestion.ref == 't4') {
                            this.trueAnswerCorrectMistake = data[0].lib;
                        }
                    }
                );
                if (this.selected.typeDeQuestion.ref == 't1') {
                    this.question1 = '';
                    this.question2 = '';
                    this.answer = '_____';
                    document.getElementById('mistake').style.visibility = 'hidden';
                    document.getElementById('mistake').style.height = '0px';
                    document.getElementById('question').style.visibility = 'visible';
                    document.getElementById('question').style.height = 'auto';
                    document.getElementById('answers').style.visibility = 'visible';
                    document.getElementById('answers').style.height = 'auto';
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
                } else if (this.selected.typeDeQuestion.ref == 't4') {
                    this.correctMistakeAnswer = null;
                    document.getElementById('mistake').style.visibility = 'visible';
                    document.getElementById('mistake').style.height = 'auto';
                    document.getElementById('question').style.visibility = 'hidden';
                    document.getElementById('question').style.height = '0px';
                    document.getElementById('answers').style.visibility = 'hidden';
                    document.getElementById('answers').style.height = '0px';
                }
            }
        );
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
