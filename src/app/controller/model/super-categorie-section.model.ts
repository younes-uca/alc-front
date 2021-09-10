import {CategorieSection} from './categorie-section.model';

export class SuperCategorieSection {
    public id: number;
    public code: string;
    public libelle: string;
    public categoriesectionList = new Array<CategorieSection>();
}
