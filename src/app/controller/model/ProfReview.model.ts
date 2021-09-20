import {Cours} from './cours.model';
import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';

export class ProfReview {
    public id: number;
    public cours = new Cours();
    public etudiant = new Etudiant();
    public prof = new Prof();
    public review: number;
    public comment: string;
    public dateReview = new Date();
}
