import {Injectable} from '@angular/core';
import {Prof} from '../model/prof.model';
import {Admin} from '../model/admin.model';
import {Etudiant} from '../model/etudiant.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {


    private url = 'http://localhost:8036/learn/';

    constructor(private http: HttpClient) {
    }

    private _prof: Prof;

    get prof(): Prof {
        if (this._prof == null) {
            this._prof = new Prof();
        }
        return this._prof;
    }

    set prof(value: Prof) {
        this._prof = value;
    }

    private _admin: Admin;

    get admin(): Admin {
        return this._admin;
    }

    set admin(value: Admin) {
        this._admin = value;
    }

    private _etudiant: Etudiant;

    get etudiant(): Etudiant {
        return this._etudiant;
    }

    set etudiant(value: Etudiant) {
        this._etudiant = value;
    }

    private _model: any[];

    get model(): any[] {
        return this._model;
    }

    set model(value: any[]) {
        this._model = value;
    }

    public findProf(username: string, password: string): Observable<Prof> {
        return this.http.get<Prof>('http://localhost:8036/learn/prof/login/' + username + '/password/' + password);
    }

    public findEtudiant(username: string, password: string): Observable<Etudiant> {
        return this.http.get<Etudiant>('http://localhost:8036/learn/etudiant/login/' + username + '/password/' + password);
    }

    public findAdmin(username: string, password: string): Observable<Admin> {
        return this.http.get<Admin>('http://localhost:8036/learn/admin/login/' + username + '/password/' + password);
    }
}
