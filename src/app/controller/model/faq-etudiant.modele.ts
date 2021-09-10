import {FaqType} from './faq-type.model';
import {Admin} from './admin.model';
import {Etudiant} from './etudiant.model';

export class FaqEtudiant {
    public id: number;
    public libelle: string;
    public description: string;
    public faqType = new FaqType();
    public etudiant = new Etudiant();
    public admin = new Admin();
}
