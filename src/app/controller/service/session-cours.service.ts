/* tslint:disable:variable-name */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionCours} from '../model/session-cours.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Etudiant} from '../model/etudiant.model';
import {Prof} from '../model/prof.model';
import {EtudiantCours} from '../model/etudiant-cours.model';

@Injectable({
    providedIn: 'root'
})
export class SessionCoursService {

    private url = environment.baseUrl + 'etudiantCours/';

    // }
    constructor(private http: HttpClient) {
    }

    private _items: Array<EtudiantCours>;

    get items(): Array<EtudiantCours> {
        if (this._items == null) {
            this._items = new Array<EtudiantCours>();
        }
        return this._items;
    }

    set items(value: Array<EtudiantCours>) {
        this._items = value;
    }

    private _selectedItems: Array<SessionCours>;

    get selectedItems(): Array<SessionCours> {
        if (this._selectedItems == null) {
            this._selectedItems = new Array<SessionCours>();
        }
        return this._selectedItems;
    }

    set selectedItems(value: Array<SessionCours>) {
        this._selectedItems = value;
    }

    private _itemsProf: Array<Prof>;

    get itemsProf(): Array<Prof> {
        if (this._itemsProf == null) {
            this._itemsProf = new Array<Prof>();
        }
        return this._itemsProf;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemsProf(value: Array<Prof>) {
        this._itemsProf = value;
    }


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {

    private _itemsEtudiant: Array<Etudiant>;

    get itemsEtudiant(): Array<Etudiant> {
        if (this._itemsEtudiant == null) {
            this._itemsEtudiant = new Array<Etudiant>();
        }
        return this._itemsEtudiant;
    }

    set itemsEtudiant(value: Array<Etudiant>) {
        this._itemsEtudiant = value;
    }

    private _selected: EtudiantCours;

    get selected(): EtudiantCours {
        if (this._selected == null) {
            this._selected = new EtudiantCours();
        }
        return this._selected;
    }

    set selected(value: EtudiantCours) {
        this._selected = value;
    }

    private _selectes: Array<SessionCours>;

    get selectes(): Array<SessionCours> {
        if (this._selectes == null) {
            this._selectes = new Array<SessionCours>();
        }
        return this._selectes;
    }

    set selectes(value: Array<SessionCours>) {
        this._selectes = value;
    }

    private _createDialog: boolean;

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    private _editDialog: boolean;

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    private _viewDialog: boolean;

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    private _submitted: boolean;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    findByCriteria(): Observable<Array<EtudiantCours>> {
        return this.http.post<Array<EtudiantCours>>('http://localhost:8036/learn/session/search', this.selected);
    }

    public findAll(): Observable<Array<EtudiantCours>> {
        return this.http.get<Array<EtudiantCours>>(this.url);
    }

    public findAllProf(): Observable<Array<Prof>> {
        return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof/');
    }

    public findAllEtudiant(): Observable<Array<Etudiant>> {
        return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/');
    }

    public save(): Observable<SessionCours> {
        return this.http.post<SessionCours>(this.url, this.selected);
    }

    public edit(): Observable<EtudiantCours> {
        return this.http.put<EtudiantCours>(this.url, this.selected);
    }

    public update(session: SessionCours): Observable<SessionCours> {
        return this.http.put<SessionCours>(this.url, session);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }

    public deleteMultipleByReference(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-id', this.selectes);
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }
}
