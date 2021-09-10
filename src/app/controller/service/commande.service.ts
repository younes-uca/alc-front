import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../model/commande.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommandeService {

    private url = environment.baseUrl + 'commande/';

    // }
    constructor(private http: HttpClient) {
    }

    private _items: Array<Commande>;

    get items(): Array<Commande> {
        return this._items;
    }

    set items(value: Array<Commande>) {
        this._items = value;
    }

    private _selected: Commande;

    get selected(): Commande {
        return this._selected;
    }

    set selected(value: Commande) {
        this._selected = value;
    }


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {

    private _selectes: Array<Commande>;

    get selectes(): Array<Commande> {
        return this._selectes;
    }

    set selectes(value: Array<Commande>) {
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

    public findAll(): Observable<Array<Commande>> {
        return this.http.get<Array<Commande>>(this.url);
    }

    public save(): Observable<Commande> {
        return this.http.post<Commande>(this.url, this.selected);
    }

    public edit(): Observable<Commande> {
        return this.http.put<Commande>(this.url, this.selected);
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

    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }
}
