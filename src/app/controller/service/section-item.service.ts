import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Section} from '../model/section.model';
import {SectionItemModel} from '../model/section-item.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SectionItemService {

    constructor(private http: HttpClient) {
    }

    private _host = environment.sectionItemUrl;
    private _showVocabulary:boolean


    get showVocabulary(): boolean {
        return this._showVocabulary;
    }

    set showVocabulary(value: boolean) {
        this._showVocabulary = value;
    }

    get host(): string {
        return this._host;
    }

    set host(value: string) {
        this._host = value;
    }

    private _sectionSelected: Section;

    get sectionSelected(): Section {
        return this._sectionSelected;
    }

    set sectionSelected(value: Section) {
        this._sectionSelected = value;
    }

    private _sectionItem: SectionItemModel;

    get sectionItem(): SectionItemModel {
        return this._sectionItem;
    }

    set sectionItem(value: SectionItemModel) {
        this._sectionItem = value;
    }

    public createSectionItems() {
        return this.http.post(
            this.host + 'sectionId/' + this.sectionSelected.id,
            this.sectionSelected.sectionItems);
    }

    public deleteSectionItems(ids: Array<number>) {
        return this.http.post(
            this.host + 'deleteMultiple/',
            ids
        );
    }

    public getSectionItems(): Observable<SectionItemModel[]> {
        console.log('Hadaa howa id=' + this.sectionSelected?.id);
        return this.http.get<SectionItemModel[]>(this.host + 'sectionId/' + this.sectionSelected?.id);
    }


}
