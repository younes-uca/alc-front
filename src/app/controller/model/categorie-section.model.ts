import {Section} from './section.model';
import {SuperCategorieSection} from './super-categorie-section.model';


export class CategorieSection {
    public id: number;
    public code: string;
    public libelle: string;
    public numeroOrder: number;
    public sectionList = new Array<Section>();
    public superCategorieSection = new SuperCategorieSection();
}
