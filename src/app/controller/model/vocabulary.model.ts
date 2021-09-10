import {Section} from './section.model';

export class Vocabulary {
    public id: number;
    public numero: number;
    public libelle: string;
    public section = new Section();
    public word: string;
    public result: string;
    public explication: string;
    public exemple: string;
    public image: string;
    public ref: string;
}
