import {FaqType} from './faq-type.model';
import {Prof} from './prof.model';
import {Admin} from './admin.model';

export class FaqProf {
    public id: number;
    public libelle: string;
    public description: string;
    public faqType = new FaqType();
    public prof = new Prof();
    public admin = new Admin();
}
