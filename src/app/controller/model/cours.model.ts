import {Section} from './section.model';
import {Parcours} from './parcours.model';

export class Cours {
    public id: number;
    public code: string;
    public etatCours: string;
    public libelle: string;
    public image: string;
    public description: number;
    public nombreSectionFinalise: number;
    public nombreSectionEnCours: number;
    public nombreLinkEnCours: number;
    public nombreLinkFinalise: number;
    public numeroOrder: number;
    public parcours = new Parcours();
    public sectionList = new Array<Section>();
}
