import {TypeDeQuestion} from './type-de-question.model';
import {Quiz} from './quiz.model';
import {Reponse} from './reponse.model';

export class Question {
    public id: number;
    public ref: string;
    public libelle: string;
    public numero: number;
    public pointReponseJuste: number;
    public pointReponsefausse: number;
    public typeDeQuestion = new TypeDeQuestion();
    public quiz = new Quiz();
    public reponses = new Array<Reponse>();
}
