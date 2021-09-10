import {QuizEtudiant} from './quiz-etudiant.model';
import {Question} from './question.model';
import {Section} from './section.model';

export class Quiz {
    public id: number;
    public ref: string;
    public lib: string;
    public dateDebut: Date = new Date();
    public dateFin: Date = new Date();
    public numero: number;
    public seuilReussite: number;
    public section = new Section();
    public quizEtudiant = new Array<QuizEtudiant>();
    public questions = new Array<Question>();
}
