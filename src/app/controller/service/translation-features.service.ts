import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SectionItemService} from './section-item.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {SectionItemModel} from '../model/section-item.model';

@Injectable({
    providedIn: 'root'
})
export class TranslationFeaturesService {
    host = environment.translationHost;
    sectionAfterTranslate={}

    constructor(private http: HttpClient, private sectionItemService: SectionItemService) {
    }
    get sectionItem(): SectionItemModel {
        return this.sectionItemService.sectionItem;
    }

    set sectionItem(value: SectionItemModel) {
        this.sectionItemService.sectionItem = value;
    }


    getTranslationFeatures(response: string) :Observable<SectionItemModel> {

        return this.http.get<SectionItemModel>(this.host + response)
    }
}
