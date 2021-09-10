import {Inscription} from '../model/inscription.model';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Prof} from '../model/prof.model';
import {EtatInscription} from '../model/etat-inscription.model';

import {EtudiantVo} from '../model/etudiant-vo.model';
import {Centre} from '../model/centre.model';
import {Parcours} from '../model/parcours.model';
import {Etudiant} from '../model/etudiant.model';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService {

    private url = environment.baseUrl + 'inscription/';

    // }
    constructor(private http: HttpClient) {
    }

    private _items: Array<Inscription>;

    get items(): Array<Inscription> {
        if (this._items == null) {
            this._items = new Array<Inscription>();
        }
        return this._items;
    }

    set items(value: Array<Inscription>) {
        this._items = value;
    }

    private _selected: Inscription;

    get selected(): Inscription {
        if (this._selected == null) {
            this._selected = new Inscription();
        }
        return this._selected;
    }

    set selected(value: Inscription) {
        this._selected = value;
    }

    private _selectes: Array<Inscription>;

    get selectes(): Array<Inscription> {
        if (this._selectes == null) {
            this._selectes = new Array<Inscription>();
        }
        return this._selectes;
    }

    set selectes(value: Array<Inscription>) {
        this._selectes = value;
    }

    private _etatInscription: EtatInscription;

    get etatInscription(): EtatInscription {
        if (this._etatInscription == null) {
            this._etatInscription = new EtatInscription();
        }
        return this._etatInscription;
    }

    set etatInscription(value: EtatInscription) {
        this._etatInscription = value;
    }

    private _etudiant: Etudiant;

    get etudiant(): Etudiant {
        if (this._etudiant == null) {
            this._etudiant = new Etudiant();
        }
        return this._etudiant;
    }

    set etudiant(value: Etudiant) {
        this._etudiant = value;
    }

    private _selectedetudiant: Etudiant;

    get selectedetudiant(): Etudiant {
        if (this._selectedetudiant == null) {
            this._selectedetudiant = new Etudiant();
        }
        return this._selectedetudiant;
    }

    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {

    set selectedetudiant(value: Etudiant) {
        this._selectedetudiant = value;
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

    private _index: number;

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    private _etudiantVo: EtudiantVo;

    get etudiantVo(): EtudiantVo {
        if (this._etudiantVo == null) {
            this._etudiantVo = new EtudiantVo();
        }
        return this._etudiantVo;
    }

    set etudiantVo(value: EtudiantVo) {
        this._etudiantVo = value;
    }

    private _inscription: Inscription;

    get inscription(): Inscription {
        if (this._inscription == null) {
            this._inscription = new Inscription();
        }
        return this._inscription;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set inscription(value: Inscription) {
        this._inscription = value;
    }

    private _valideDialog: boolean;

    get valideDialog(): boolean {
        return this._valideDialog;
    }

    set valideDialog(value: boolean) {
        this._valideDialog = value;
    }

    private _prof: Array<Prof>;

    get prof(): Array<Prof> {
        if (this._prof == null) {
            this._prof = new Array<Prof>();
        }
        return this._prof;
    }

    set prof(value: Array<Prof>) {
        this._prof = value;
    }

    private _etatinscriptionslist: Array<EtatInscription>;

    get etatinscriptionslist(): Array<EtatInscription> {
        if (this._etatinscriptionslist == null) {
            this._etatinscriptionslist = new Array<EtatInscription>();
        }
        return this._etatinscriptionslist;
    }

    set etatinscriptionslist(value: Array<EtatInscription>) {
        this._etatinscriptionslist = value;
    }

    private _centreList: Array<Centre>;

    get centreList(): Array<Centre> {
        if (this._centreList == null) {
            this._centreList = new Array<Centre>();
        }
        return this._centreList;
    }

    set centreList(value: Array<Centre>) {
        this._centreList = value;
    }

    private _parcoursList: Array<Parcours>;

    get parcoursList(): Array<Parcours> {
        if (this._parcoursList == null) {
            this._parcoursList = new Array<Parcours>();
        }
        return this._parcoursList;
    }

    set parcoursList(value: Array<Parcours>) {
        this._parcoursList = value;
    }

    findByCriteria(): Observable<Array<Inscription>> {
        return this.http.post<Array<Inscription>>('http://localhost:8036/learn/inscription/search', this.selected);
    }

    public findAllProf(): Observable<Array<Prof>> {
        return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof/');
    }

    public findAllCentre(): Observable<Array<Centre>> {
        return this.http.get<Array<Centre>>('http://localhost:8036/learn/centre/');
    }

    public findAllParcours(): Observable<Array<Parcours>> {
        return this.http.get<Array<Parcours>>('http://localhost:8036/learn/parcours/');

    }

    public findAllEtat(): Observable<Array<EtatInscription>> {
        return this.http.get<Array<EtatInscription>>('http://localhost:8036/learn/etatInscription/');
    }

    public update(index: number, inscription: Inscription) {

        this._index = index;
    }

    public valider(): Observable<Inscription> {
        return this.http.put<Inscription>('http://localhost:8036/learn/inscription/', this.selected);
    }

    public findAll(): Observable<Array<Inscription>> {
        return this.http.get<Array<Inscription>>(this.url);
    }

    public save(): Observable<Inscription> {
        return this.http.post<Inscription>(this.url, this.selected);
    }

    public edit(): Observable<Inscription> {
        return this.http.put<Inscription>(this.url, this.selected);
    }

    public deleteByNumeroInscription(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }

    public deleteMultipleByNumeroInscription(): Observable<number> {
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

