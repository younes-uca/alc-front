import {Component, OnInit} from '@angular/core';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Quiz} from '../../../controller/model/quiz.model';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';

@Component({
    selector: 'app-view-quiz-etudiant',
    templateUrl: './view-quiz-etudiant.component.html',
    styleUrls: ['./view-quiz-etudiant.component.scss']
})
export class ViewQuizEtudiantComponent implements OnInit {

    constructor(private service: QuizEtudiantService, private messageService: MessageService, private confirmationService: ConfirmationService) {
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

    ngOnInit(): void {
        this.service.findQuizEtudiantByQuiz(this.selectedQuiz.ref).subscribe(data => this.quizsEtudiant = data);
    }

    view(quiz: QuizEtudiant) {

    }

    delete(quiz: QuizEtudiant) {
        this.service.deleteQuizEtudiant(quiz).subscribe(
            data => {
                this.service.findQuizEtudiantByQuiz(this.selectedQuiz.ref).subscribe(data => this.quizsEtudiant = data);
            }
        );
    }
}
