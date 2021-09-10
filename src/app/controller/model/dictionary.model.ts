import {Etudiant} from './etudiant.model';

export class Dictionary {
    public id: number;
    public word: string;
    public definition: string;
    public etudiant = new Etudiant();
}
