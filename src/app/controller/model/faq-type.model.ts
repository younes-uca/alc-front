import {Faq} from './faq.model';

export class FaqType {
    public id: number;
    public libelle: string;
    public destinataire: string;
    public faq = new Array<Faq>();
}
