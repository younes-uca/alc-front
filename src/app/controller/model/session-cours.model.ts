import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';

export class SessionCours {
    public id: number;
    public reference: string;
    public etudiant = new Etudiant();
    public prof = new Prof();
    public dateDebut: string;
    public dateFin: string;
    public duree: number;
    public payer: string;
}
