import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../controller/service/login.service';
import {Prof} from '../controller/model/prof.model';
import {Admin} from '../controller/model/admin.model';
import {Etudiant} from '../controller/model/etudiant.model';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: LoginService) {

    }

    private _role: string;

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    private _login: string;

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    private _password: string;

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    private _routeurLink = '[\'/pages/home\']';

    get routeurLink(): string {
        return this._routeurLink;
    }

    set routeurLink(value: string) {
        this._routeurLink = value;
    }

    private _viewDialogRole: boolean;

    get viewDialogRole(): boolean {
        return this._viewDialogRole;
    }

    set viewDialogRole(value: boolean) {
        this._viewDialogRole = value;
    }

    private _error: string;

    get error(): string {
        return this._error;
    }

    set error(value: string) {
        this._error = value;
    }

    get prof(): Prof {
        return this.service.prof;
    }

    set prof(value: Prof) {
        this.service.prof = value;
    }

    get admin(): Admin {
        return this.service.admin;
    }

    set admin(value: Admin) {
        this.service.admin = value;
    }

    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }

    public findPersonne() {
        /*this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Created',
          life: 3000
        });*/
        // tslint:disable-next-line:triple-equals
        if (this.role == 'prof') {
            this.service.findProf(this.login, this.password).subscribe(
                data => {
                    this.prof = data;
                    this.admin = null;
                    this.etudiant = null;
                    this.routeurLink = '[\'/pages/home\']';
                }, error => {
                    document.getElementById('log-pass').style.visibility = 'visible';
                    this.error = 'Login or Password invalid';
                });

        }
        // tslint:disable-next-line:triple-equals
        else if (this.role == 'etudiant') {
            this.service.findEtudiant(this.login, this.password).subscribe(
                data => {
                    this.etudiant = data;
                    this.admin = null;
                    this.prof = null;
                    console.log(this.etudiant);
                }, error => {
                    document.getElementById('log-pass').style.visibility = 'visible';
                    this.error = 'Login or Password invalid';
                });
        }
        // tslint:disable-next-line:triple-equals
        else if (this.role == 'admin') {
            this.service.findAdmin(this.login, this.password).subscribe(
                data => {
                    this.admin = data;
                    this.prof = null;
                    this.etudiant = null;
                    console.log(this.admin);
                }, error => {
                    document.getElementById('log-pass').style.visibility = 'visible';
                    this.error = 'Login or Password invalid';
                });
        } else if (this.role == null) {
            document.getElementById('log-pass').style.visibility = 'visible';
            this.error = 'Choose your responsability (Admin / Teacher / Student)';
        }
    }

    public choose() {
        document.getElementById('log-pass').style.visibility = 'hidden';
    }

    public hideViewDialog() {
        this.viewDialogRole = false;
    }

    public openVideDialog() {
        this.viewDialogRole = true;
    }
}
