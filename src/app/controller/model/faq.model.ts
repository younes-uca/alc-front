import {FaqType} from './faq-type.model';

export class Faq {
    public id: number;
    public libelle: string;
    public description: string;
    public faqType = new FaqType();
}
