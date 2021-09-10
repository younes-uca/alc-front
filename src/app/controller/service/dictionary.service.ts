/* tslint:disable:variable-name */
import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary.model';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {
    constructor(private http: HttpClient, public serviceUser: LoginService) {
    }
    private _selectedNow: Dictionary;
private _listSynonymes: Array<any>;
private _Synonymes: Array<any>;
    private _selected: Dictionary;
    get selectedNow(): Dictionary {
        if (this._selectedNow == null) {
            this._selectedNow = new Dictionary();
        }
        return this._selectedNow;
    }

    set selectedNow(value: Dictionary) {
        this._selectedNow = value;
    }

    get Synonymes(): Array<any> {
        return this._Synonymes;
    }

    set Synonymes(value: Array<any>) {
        this._Synonymes = value;
    }

    get listSynonymes(): Array<any> {
        return this._listSynonymes;
    }

    set listSynonymes(value: Array<any>) {
        this._listSynonymes = value;
    }

    get selected(): Dictionary {
        if (this._selected == null) {
            this._selected = new Dictionary();
        }
        return this._selected;
    }

    set selected(value: Dictionary) {
        this._selected = value;
    }

    private _selectedDict: Dictionary;

    get selectedDict(): Dictionary {
        if (this._selectedDict == null) {
            this._selectedDict = new Dictionary();
        }
        return this._selectedDict;
    }

    set selectedDict(value: Dictionary) {
        this._selectedDict = value;
    }

    private _items: Array<Dictionary>;

    get items(): Array<Dictionary> {
        return this._items;
    }

    set items(value: Array<Dictionary>) {
        this._items = value;
    }

    private _itemsDict: Array<Dictionary>;

    get itemsDict(): Array<Dictionary> {
        if (this._itemsDict == null) {
            this._itemsDict = new Array<Dictionary>();
        }
        return this._itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this._itemsDict = value;
    }

    private _editDialog: boolean;
    private _TranslateSynonymeDialog: boolean;

    get TranslateSynonymeDialog(): boolean {
        return this._TranslateSynonymeDialog;
    }

    set TranslateSynonymeDialog(value: boolean) {
        this._TranslateSynonymeDialog = value;
    }

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    private _submitted: boolean;

    get submitted(): boolean {
        return this._submitted;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set submitted(value: boolean) {
        this._submitted = value;
    }

    private _submittedDict: boolean;

    get submittedDict(): boolean {
        return this._submittedDict;
    }

    set submittedDict(value: boolean) {
        this._submittedDict = value;
    }

    private _submittedDictEdit: boolean;

    get submittedDictEdit(): boolean {
        return this._submittedDictEdit;
    }

    set submittedDictEdit(value: boolean) {
        this._submittedDictEdit = value;
    }

    private _createDialogDict: boolean;

    get createDialogDict(): boolean {
        return this._createDialogDict;
    }

    set createDialogDict(value: boolean) {
        this._createDialogDict = value;
    }

    private _editDialogDict: boolean;

    get editDialogDict(): boolean {
        return this._editDialogDict;
    }

    set editDialogDict(value: boolean) {
        this._editDialogDict = value;
    }

    private _selectes: Array<Dictionary>;

    get selectes(): Array<Dictionary> {
        return this._selectes;
    }

    set selectes(value: Array<Dictionary>) {
        this._selectes = value;
    }

    public findAll(): Observable<Array<Dictionary>> {
        return this.http.get<Array<Dictionary>>('http://localhost:8036/learn/dictionary/' + this.selected);
    }

    public FindByWord(word: string): Observable<Dictionary> {
        console.log(this.serviceUser.etudiant.id);
        console.log(word);
        // tslint:disable-next-line:max-line-length
        return this.http.get<Dictionary>('http://localhost:8036/learn/dictionary/word/' + word + '/Etudiant/id/' + this.serviceUser.etudiant.id);
    }

    public deleteWord(word: string): Observable<number> {
        // tslint:disable-next-line:max-line-length
        return this.http.delete<number>('http://localhost:8036/learn/dictionary/words/' + word + '/Etudiant/id/' + this.serviceUser.etudiant.id);
    }

    public FindAllWord(): Observable<Array<Dictionary>> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Array<Dictionary>>('http://localhost:8036/learn/dictionary/etudiant/id/' + this.serviceUser.etudiant.id);
    }

    public Translate(word: string): Observable<Array<any>> {
        // tslint:disable-next-line:max-line-length
        // @ts-ignore
        return this.http.get<Array<string>>('http://localhost:8036/learn/TranslateEnAr/text/synonymes/' + word, {responseType: 'text'});
    }

    public save(): Observable<number> {
        console.log("this is save method data===>"+this.selected.definition);
        return this.http.post<number>('http://localhost:8036/learn/dictionary/', this.selected);
    }

    public editDict(): Observable<number> {
        return this.http.put<number>('http://localhost:8036/learn/dictionary/', this.selected);
    }
}
