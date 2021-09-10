/* tslint:disable:variable-name */
import {Injectable} from '@angular/core';

import {Admin} from '../model/admin.model';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private url = environment.baseUrl + 'admin/';

    constructor(private http: HttpClient) {
    }

    private _selected: Admin;

    get selected(): Admin {
        if (this._selected == null) {
            this._selected = new Admin();
        }
        return this._selected;
    }

    set selected(value: Admin) {
        this._selected = value;
    }

    private _items: Array<Admin>;

    get items(): Array<Admin> {
        return this._items;
    }

    set items(value: Array<Admin>) {
        this._items = value;
    }

    private _createDialog: boolean;

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    private _submitted: boolean;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    public save(): Observable<number> {
        return this.http.post<number>('http://localhost:8036/learn/admin/', this.selected);
    }
}
