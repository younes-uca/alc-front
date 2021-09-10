import {Etudiant} from './etudiant.model';

export class EtatInscription {
    public id: string;
    public libelle: string;
    public ref: string;
    public etudiantList = new Array<Etudiant>();
}
