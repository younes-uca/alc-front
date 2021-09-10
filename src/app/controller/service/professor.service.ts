import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Prof} from '../model/prof.model';
import {Paiement} from '../model/paiement.model';
import {SessionCours} from '../model/session-cours.model';


@Injectable({
    providedIn: 'root'
})
export class ProfessorService {
    private url = environment.baseUrl + 'prof/';

    // }
    constructor(private http: HttpClient) {
    }

    private _items: Array<Prof>;

    get items(): Array<Prof> {
        if (this._items == null) {
            this._items = new Array<Prof>();
        }
        return this._items;
    }

    set items(value: Array<Prof>) {
        this._items = value;
    }

    private _itemsSession: Array<SessionCours>;

    get itemsSession(): Array<SessionCours> {
        return this._itemsSession;
    }

    set itemsSession(value: Array<SessionCours>) {
        this._itemsSession = value;
    }

    private _selected: Prof;

    get selected(): Prof {
        if (this._selected == null) {
            this._selected = new Prof();
        }
        return this._selected;
    }

    set selected(value: Prof) {
        this._selected = value;
    }

    private _selectes: Array<Prof>;

    get selectes(): Array<Prof> {
        if (this._selectes == null) {
            this._selectes = new Array<Prof>();
        }
        return this._selectes;
    }

    set selectes(value: Array<Prof>) {
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


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {

    set submitted(value: boolean) {
        this._submitted = value;
    }

    private _itemsPaiement: Array<Paiement>;

    get itemsPaiement(): Array<Paiement> {
        if (this._itemsPaiement == null) {
            this._itemsPaiement = new Array<Paiement>();
        }
        return this._itemsPaiement;
    }

    set itemsPaiement(value: Array<Paiement>) {
        this._itemsPaiement = value;
    }

    private _selectedPaiement: Paiement;

    get selectedPaiement(): Paiement {
        if (this._selectedPaiement == null) {
            this._selectedPaiement = new Paiement();
        }
        return this._selectedPaiement;
    }

    set selectedPaiement(value: Paiement) {
        this._selectedPaiement = value;
    }

    private _viewDialogProf: boolean;

    get viewDialogProf(): boolean {
        return this._viewDialogProf;
    }

    set viewDialogProf(value: boolean) {
        this._viewDialogProf = value;
    }

    private _paiement: Paiement;

    get paiement(): Paiement {
        if (this._paiement == null) {
            this._paiement = new Paiement();
        }
        return this._paiement;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set paiement(value: Paiement) {
        this._paiement = value;
    }

    public afficheSession(id: number): Observable<Array<SessionCours>> {
        return this.http.get<Array<SessionCours>>('http://localhost:8036/learn/session/prof/id/' + id);
    }

    /*paiement*/
    public paiementProf(): Observable<Array<Paiement>> {
        return this.http.get<Array<Paiement>>('http://localhost:8036/learn//prof/paiement');
    }

    findByCriteria(): Observable<Array<Prof>> {
        return this.http.post<Array<Prof>>('http://localhost:8036/learn/prof/search', this.selected);
    }

    public findAll(): Observable<Array<Prof>> {
        return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof/');
    }

    public Search(): Observable<Array<Prof>> {
        return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof/nom/' + this.selected.nom);
    }

    public save(): Observable<Prof> {
        return this.http.post<Prof>('http://localhost:8036/learn/prof/', this.selected);
    }

    public edit(): Observable<Prof> {
        return this.http.put<Prof>(this.url, this.selected);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }

    public deleteMultipleByReference(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-id', this.selectes);
    }

    public payer(paiement: Paiement): Observable<Paiement> {
        return this.http.post<Paiement>('http://localhost:8036/learn/paiement/', paiement);
    }

    public findSessionNonPayer(id: number): Observable<Array<SessionCours>> {
        return this.http.get<Array<SessionCours>>('http://localhost:8036/learn/prof/sessionNonPayer/prof/id/' + id);
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
