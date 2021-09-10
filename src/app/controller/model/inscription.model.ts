import {EtatInscription} from './etat-inscription.model';
import {Prof} from './prof.model';
import {Parcours} from './parcours.model';
import {QuizEtudiant} from './quiz-etudiant.model';

export class Inscription {
    public id: number;
    public ref: string;
    public nom: string;
    public prenom: string;
    public gmail: string;
    public numero: string;
    public age: number;
    public login: string;
    public ville: string;
    public address: string;
    public password: string;
    public parcours = new Parcours();
    public quizEtudiant = new Array<QuizEtudiant>();
    public image: string;
    public numeroInscription: string;
    public datedebutinscription: Date;
    public datefininscription: Date;
    public prof = new Prof();
    public etatInscription = new EtatInscription();
}
