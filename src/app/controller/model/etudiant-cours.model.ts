import {Cours} from './cours.model';
import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';

export class EtudiantCours {
    public id: number;
    public cours = new Cours();
    public etudiant = new Etudiant();
    public prof = new Prof();
}
