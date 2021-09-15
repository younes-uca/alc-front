import {Reponse} from './reponse.model';
import {QuizEtudiant} from './quiz-etudiant.model';
import {Question} from './question.model';

export class ReponseEtudiant {
    public id: number;
    public reponse = new Reponse();
    public ref: string;
    public quizEtudiant = new QuizEtudiant();
    public note: number;
    public answer: string;
    public question = new Question();
}
