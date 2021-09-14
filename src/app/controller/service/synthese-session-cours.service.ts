import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {SyntheseSessionCours} from '../model/synthese-session-cours.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etudiant} from '../model/etudiant.model';
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class SyntheseSessionCoursService {


    private url = environment.baseUrl + 'etat/';

    // }
    constructor(private http: HttpClient, private serviceUser: LoginService) {
    }

    private _items: Array<SyntheseSessionCours>;
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

    get items(): Array<SyntheseSessionCours> {
        if (this._items == null) {
            this._items = new Array<SyntheseSessionCours>();
        }
        return this._items;
    }

    set items(value: Array<SyntheseSessionCours>) {
        this._items = value;
    }

    private _selected: SyntheseSessionCours;

    get selected(): SyntheseSessionCours {
        if (this._selected == null) {
            this._selected = new SyntheseSessionCours();
        }
        return this._selected;
    }

    set selected(value: SyntheseSessionCours) {
        this._selected = value;
    }


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {

    private _selectes: Array<SyntheseSessionCours>;

    get selectes(): Array<SyntheseSessionCours> {
        if (this._selectes == null) {
            this._selectes = new Array<SyntheseSessionCours>();
        }
        return this._selectes;
    }

    set selectes(value: Array<SyntheseSessionCours>) {
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

    public findAll(): Observable<Array<SyntheseSessionCours>> {
        return this.http.get<Array<SyntheseSessionCours>>(this.url);
    }
    public findAllStudent(): Observable<Array<Etudiant>> {
        return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/prof/id/' + this.serviceUser.prof.id);
    }
    public save(): Observable<SyntheseSessionCours> {
        return this.http.post<SyntheseSessionCours>(this.url, this.selected);
    }

    public edit(): Observable<SyntheseSessionCours> {
        return this.http.put<SyntheseSessionCours>(this.url, this.selected);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>(this.url + 'reference/' + this.selected.reference);
    }

    public deleteMultipleByReference(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-reference', this.selectes);
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

    public lent(): number {
        return this.items.length;
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
