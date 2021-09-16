import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {LocaleStorageService} from '../../../controller/service/locale-storage.service';
import {UserService} from '../../../controller/service/user.service';
import {User} from '../../../controller/model/user.model';

@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: UserService, private router: Router, private localeStorageService: LocaleStorageService) {

    }

    // tslint:disable-next-line:variable-name
    private _correct: boolean;

    get correct(): boolean {
        return this._correct;
    }

    set correct(value: boolean) {
        this._correct = value;
    }

    get user(): User {
        return this.service.user;
    }

    set user(value: User) {
        this.service.user = value;
    }

    get model(): any[] {
        return this.service.model;
    }

    set model(value: any[]) {
        this.service.model = value;
    }


    public findAdmin() {
        this.service.signin().subscribe(
            data => {
                this.localeStorageService.set('token', data.token);
                this.localeStorageService.set('user', data.user);
                console.log(data);
                this.correct = true;
                this.model = [
                    {label: 'Manage Parcours', icon: 'pi pi-fw pi-table', routerLink: ['/pages/parcours']},
                    {label: 'Inscriptions List', icon: 'pi pi-fw pi-check-square', routerLink: ['/view/inscription']},
                    {label: 'Student List', icon: 'pi pi-fw pi-list', routerLink: ['/pages/etudiant']},
                    {label: 'Professor', icon: 'pi pi-fw pi-user', routerLink: ['/view/teacherLists']},
                    {label: 'Professor Recommendation', icon: 'pi pi-fw pi-user-plus', routerLink: ['/pages/recommendAdmin']},
                    {label: 'Paiement', icon: 'pi pi-fw pi-wallet', routerLink: ['/pages/paiement']},
                    {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-reply', routerLink: ['/pages/faq-admin']},
                    {label: 'FAQ List', icon: 'pi pi-fw pi-info-circle', routerLink: ['/pages/faq-admin-list']},
                    {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/news-admin']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/schedule']}
                ];
                this.router.navigate(['pages/parcours']);
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
