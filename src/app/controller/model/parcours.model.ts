import {Cours} from './cours.model';
import {Centre} from './centre.model';

export class Parcours {
    public id: number;
    public code: string;
    public libelle: string;
    public description: string;
    public datePublication: Date = new Date();
    public dateCreation: Date = new Date();
    public numeroOrder: number;
    public nombreCours: number;
    public coursList = new Array<Cours>();
    public centre = new Centre();
}
