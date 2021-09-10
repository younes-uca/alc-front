import {Prof} from './prof.model';

export class Paiement {
    public id: number;
    public prof = new Prof();
    public nonPaye: number;
    public montant: number;
    public totalHeure: number;
    public nbrSeceance: number;
    public dateDebut: Date = new Date();
    public dateFin: Date = new Date();
}
