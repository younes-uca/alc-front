import {Section} from './section.model';

export class SectionItemModel {
    public id: number;
    public imageUrl: string;
    public response?: string;
    public translation: string;
    public explanation: string;
    public example: string;
    public synonyms: string[];
    public section: Section;


    constructor(imageUrl: string) {
        this.imageUrl = imageUrl;
    }
}
