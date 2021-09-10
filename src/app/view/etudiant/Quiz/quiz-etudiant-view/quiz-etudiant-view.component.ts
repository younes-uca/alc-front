import {Component, OnInit} from '@angular/core';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../../controller/model/quiz-class-room.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {ReponseEtudiant} from '../../../../controller/model/reponse-etudiant.model';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../../controller/service/login.service';
import {Question} from '../../../../controller/model/question.model';
import {Reponse} from '../../../../controller/model/reponse.model';

@Component({
    selector: 'app-quiz-etudiant-view',
    templateUrl: './quiz-etudiant-view.component.html',
    styleUrls: ['./quiz-etudiant-view.component.scss']
})
export class QuizEtudiantViewComponent implements OnInit {

    cols: any[];

    constructor(private service: QuizEtudiantService, private login: LoginService) {
    }

    private _numero = 0;

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }

    private _klma = '';

    get klma(): string {
        return this._klma;
    }

    set klma(value: string) {
        this._klma = value;
    }

    get quizEtudiantList(): QuizEtudiant {
        return this.service.quizEtudiantList;
    }

    set quizEtudiantList(value: QuizEtudiant) {
        this.service.quizEtudiantList = value;
    }

    get etudiantsClassroom(): Array<EtudiantClassRoom> {
        return this.service.etudiantsClassroom;
    }

    set etudiantsClassroom(value: Array<EtudiantClassRoom>) {
        this.service.etudiantsClassroom = value;
    }

    get quizsClassroom(): Array<QuizClassRoom> {
        return this.service.quizsClassroom;
    }

    set quizsClassroom(value: Array<QuizClassRoom>) {
        this.service.quizsClassroom = value;
    }

    get selectedQuiz(): Quiz {
        return this.service.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.service.selectedQuiz = value;
    }

    get viewDialogQuiz(): boolean {
        return this.service.viewDialogQuiz;
    }

    set viewDialogQuiz(value: boolean) {
        this.service.viewDialogQuiz = value;
    }

    get selectedQuizClassroom(): QuizClassRoom {
        return this.service.selectedQuizClassroom;
    }

    set selectedQuizClassroom(value: QuizClassRoom) {
        this.service.selectedQuizClassroom = value;
    }

    get reponsesEtudiantList(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiantList;
    }

    set reponsesEtudiantList(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiantList = value;
    }

    get questionView(): Question {
        return this.service.questionView;
    }

    set questionView(value: Question) {
        this.service.questionView = value;
    }

    get reponsesView(): Array<Reponse> {
        return this.service.reponsesView;
    }

    set reponsesView(value: Array<Reponse>) {
        this.service.reponsesView = value;
    }

    get reponsesEtudiantView(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiantView;
    }

    set reponsesEtudiantView(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiantView = value;
    }

    get items(): Array<Question> {
        return this.service.items;
    }

    set items(value: Array<Question>) {
        this.service.items = value;
    }

    get correctAnswerView(): Array<Reponse> {
        return this.service.correctAnswerView;
    }

    set correctAnswerView(value: Array<Reponse>) {
        this.service.correctAnswerView = value;
    }

    public hideViewDialog() {
        this.viewDialogQuiz = false;
    }

    public next() {
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.numero = this.numero + 1;
                if (this.numero == 1) {
                    document.getElementById('btn-previous').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-previous').style.visibility = 'visible';
                }
                if (this.numero == data.length) {
                    document.getElementById('btn-next').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-next').style.visibility = 'visible';
                }
                this.service.findQuestion(this.selectedQuiz.ref, this.numero).subscribe(
                    data => {
                        this.questionView = data;
                        this.service.findReponses(this.questionView.id).subscribe(
                            data => {
                                this.reponsesView = data;
                                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                                    // tslint:disable-next-line:no-shadowed-variable
                                    data => {
                                        this.reponsesEtudiantList = data;
                                        for (let i = 0; i < this.reponsesEtudiantList.length; i++) {
                                            console.log(this.reponsesEtudiantList);
                                            if (this.reponsesEtudiantList[i].note > 0) {
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#a5ee8f';
                                                console.log('ha wahd s7i7');
                                            } else {
                                                console.log('ha wahd ghalat');
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#ee8f8f';
                                                this.service.findCorrectAnswers(this.questionView.id).subscribe(
                                                    data => {
                                                        this.correctAnswerView = data;
                                                        for (let j = 0; j < this.correctAnswerView.length; j++) {
                                                            console.log('ha wahd s7i7');
                                                            document.getElementById('rep-' + this.correctAnswerView[i].id).style.backgroundColor = '#a5ee8f';
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }

    public previous() {
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.numero = this.numero - 1;
                if (this.numero == 1) {
                    document.getElementById('btn-previous').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-previous').style.visibility = 'visible';
                }
                if (this.numero == data.length) {
                    document.getElementById('btn-next').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-next').style.visibility = 'visible';
                }
                this.service.findQuestion(this.selectedQuiz.ref, this.numero).subscribe(
                    data => {
                        this.questionView = data;
                        this.service.findReponses(this.questionView.id).subscribe(
                            data => {
                                this.reponsesView = data;
                                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                                    // tslint:disable-next-line:no-shadowed-variable
                                    data => {
                                        this.reponsesEtudiantList = data;
                                        console.log(this.reponsesEtudiantList);
                                        console.log(this.reponsesEtudiantList.length);
                                        for (let i = 0; i < this.reponsesEtudiantList.length; i++) {
                                            console.log(this.reponsesEtudiantList);
                                            if (this.reponsesEtudiantList[i].note > 0) {
                                                console.log('ha wahd s7i7');
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#a5ee8f';
                                            } else {
                                                console.log('ha wahd ghalat');
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#ee8f8f';
                                                this.service.findCorrectAnswers(this.questionView.id).subscribe(
                                                    data => {
                                                        this.correctAnswerView = data;
                                                        for (let j = 0; j < this.correctAnswerView.length; j++) {
                                                            console.log('ha wahd s7i7');
                                                            document.getElementById('rep-' + this.correctAnswerView[i].id).style.backgroundColor = '#a5ee8f';
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    }
                                );
                            }
                        );
                    }
                );
            });
    }

    public findAllQuestions() {
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.items = data;
            }
        );

        console.log(this.quizEtudiantList);
        this.service.findReponseEtudiant(this.quizEtudiantList).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            data => {
                this.reponsesEtudiantList = data;
                for (let i = 0; i < this.reponsesEtudiantList.length; i++) {
                    if (this.reponsesEtudiantList[i].note > 0) {
                        document.getElementById('btn-' + this.reponsesEtudiantList[i].reponse.question.id).style.backgroundColor = '#a5ee8f';
                        console.log('btn-' + this.reponsesEtudiantList[i].reponse.question.ref + ' s7i7');
                    } else {
                        document.getElementById('btn-' + this.reponsesEtudiantList[i].reponse.question.id).style.backgroundColor = '#ee8f8f';
                        console.log('btn-' + this.reponsesEtudiantList[i].reponse.question.ref + ' ghalat');
                    }
                }
            }
        );

        /*this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
            data => {
              this.quizEtudiantList = data;#ee8f8f
            },error => console.log('erreuuuuuuuuuuuur'));*/
    }

    public choose(numero: number) {
        this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
            data => {
                this.numero = numero;
                if (this.numero == 1) {
                    document.getElementById('btn-previous').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-previous').style.visibility = 'visible';
                }
                if (this.numero == data.length) {
                    document.getElementById('btn-next').style.visibility = 'hidden';
                } else {
                    document.getElementById('btn-next').style.visibility = 'visible';
                }
                this.service.findQuestion(this.selectedQuiz.ref, this.numero).subscribe(
                    data => {
                        this.questionView = data;
                        this.service.findReponses(this.questionView.id).subscribe(
                            data => {
                                this.reponsesView = data;
                                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                                    // tslint:disable-next-line:no-shadowed-variable
                                    data => {
                                        this.reponsesEtudiantList = data;
                                        console.log(this.reponsesEtudiantList);
                                        console.log(this.reponsesEtudiantList.length);
                                        for (let i = 0; i < this.reponsesEtudiantList.length; i++) {
                                            console.log(this.reponsesEtudiantList);
                                            if (this.reponsesEtudiantList[i].note > 0) {
                                                console.log('ha wahd s7i7');
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#a5ee8f';
                                            } else {
                                                console.log('ha wahd ghalat');
                                                document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.id).style.backgroundColor = '#ee8f8f';
                                                this.service.findCorrectAnswers(this.questionView.id).subscribe(
                                                    data => {
                                                        this.correctAnswerView = data;
                                                        for (let j = 0; j < this.correctAnswerView.length; j++) {
                                                            console.log('ha wahd s7i7');
                                                            document.getElementById('rep-' + this.correctAnswerView[i].id).style.backgroundColor = '#a5ee8f';
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }

    ngOnInit(): void {
        this.next();
        this.findAllQuestions();
        this.initCol();

    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'note', header: 'Note'},
            {field: 'ref', header: 'Reference'},
            {field: 'quizEtudiant', header: 'Quiz Etudiant'},
            {field: 'reponse', header: 'Reponse'}
        ];
    }

}
