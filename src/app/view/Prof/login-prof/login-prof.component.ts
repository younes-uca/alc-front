/* tslint:disable:variable-name */
import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-prof',
    templateUrl: './login-prof.component.html',
    styleUrls: ['./login-prof.component.scss']
})
export class LoginProfComponent implements OnInit {

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

    public findEtudiant() {

        this.service.findProf(this.login, this.password).subscribe(
            data => {
                this.prof = data;
                this.admin = null;
                this.etudiant = null;
                this.correct = true;
                console.log(this.prof);
                this.model = [
                    {label: 'HomeTeacher', icon: 'pi pi-fw pi-home', routerLink: ['/pages/home']},
                    {label: 'Recommend A teacher', icon: 'pi pi-fw pi-comment', routerLink: ['/view/recommendat']},
                    {label: 'Salary', icon: 'pi pi-fw pi-money-bill', routerLink: ['/pages/salary']},
                    {label: 'Parcours', icon: 'pi pi-fw pi-list', routerLink: ['/pages/courses']},
                    {label: 'Classes', icon: 'pi pi-fw pi-table', routerLink: ['/pages/classes']},
                    // tslint:disable-next-line:max-line-length
                    {label: 'Synthese-Session-Cours', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages/synthese']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/view/schedule']},
                    {label: 'News', icon: 'pi pi-fw pi-clock', routerLink: ['/pages/news-teacher']},
                    {label: 'FAQ', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/faq-teacher']},
                    {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
                ];
                this.router.navigate(['/pages/home']);
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
