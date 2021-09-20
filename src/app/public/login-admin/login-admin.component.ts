import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../controller/service/login.service';
import {Prof} from '../../controller/model/prof.model';
import {Admin} from '../../controller/model/admin.model';
import {Etudiant} from '../../controller/model/etudiant.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: LoginService, private router: Router) {

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

    private _correct: boolean;

    get correct(): boolean {
        return this._correct;
    }

    set correct(value: boolean) {
        this._correct = value;
    }

    get model(): any[] {
        return this.service.model;
    }

    set model(value: any[]) {
        this.service.model = value;
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

    public findAdmin() {
        this.service.findAdmin(this.login, this.password).subscribe(
            data => {
                this.admin = data;
                this.prof = null;
                this.etudiant = null;
                console.log(this.admin);
                this.correct = true;
                this.model = [
                    {label: 'Manage Parcours', icon: 'pi pi-fw pi-table', routerLink: ['/admin/parcours']},
                    {label: 'Inscriptions List', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/inscription']},
                    {label: 'Professor', icon: 'pi pi-fw pi-user', routerLink: ['/admin/teacher-lists']},
                    {label: 'Professor Recommendation', icon: 'pi pi-fw pi-user-plus', routerLink: ['/admin/recommend-admin']},
                    {label: 'Paiement', icon: 'pi pi-fw pi-wallet', routerLink: ['/admin/paiement']},
                    {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-reply', routerLink: ['/admin/faq-admin']},
                    {label: 'FAQ List', icon: 'pi pi-fw pi-info-circle', routerLink: ['/admin/faq-admin-list']},
                    {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/admin/news-admin']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/admin/schedule']},
                    {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
                ];
                this.router.navigate(['admin/parcours']);
                //  document.getElementById('log-pass').style.visibility = 'hidden';
            }, error => {
                document.getElementById('log-pass').style.visibility = 'visible';
                this.correct = false;
            });
    }

    public choose() {
        document.getElementById('log-pass').style.visibility = 'hidden';
    }

    ngOnInit(): void {
    }

}
