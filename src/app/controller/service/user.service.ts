import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocaleStorageService} from './locale-storage.service';
import {Router} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private localeStorageService: LocaleStorageService, private router: Router) {
    }

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    // tslint:disable-next-line:variable-name
    private _user: User;

    private _model: any[];

    get model(): any[] {
        return this._model;
    }

    set model(value: any[]) {
        this._model = value;
    }

    get user(): User {
        if (this._user == null) {
            this._user = new User();
        }
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    public signin(): Observable<any> {
        return this.http.post(environment.baseUrl + 'authentification/', this.user);
    }

    public logout() {
        this.localeStorageService.remove('token');
        this.localeStorageService.remove('user');
        this.router.navigateByUrl('/');
        this.model = null;
    }
}
