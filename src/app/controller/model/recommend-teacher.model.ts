import {Prof} from './prof.model';

export class RecommendTeacher {
    public id: number;
    public ref: string;
    public nombrevote: number;
    public nom: string;
    public prenom: string;
    public commentaire: string;
    public login: string;
    public telephone: string;
    public prof = new Prof();
}
