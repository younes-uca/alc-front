/* tslint:disable:variable-name */
import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Router} from '@angular/router';
import {UserService} from '../../../controller/service/user.service';
import {LocaleStorageService} from '../../../controller/service/locale-storage.service';
import {User} from '../../../controller/model/user.model';

@Component({
    selector: 'app-login-prof',
    templateUrl: './login-prof.component.html',
    styleUrls: ['./login-prof.component.scss']
})
export class LoginProfComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: UserService, private router: Router, private localeStorageService: LocaleStorageService) {

    }

    get model(): any[] {
        return this.service.model;
    }

    set model(value: any[]) {
        this.service.model = value;
    }


    signin() {
        this.service.signin().subscribe(
            data => {
                const result = data.toString();
                if (!result.includes('bad')) {
                    this.localeStorageService.set('token', data.token);
                    this.localeStorageService.set('user', data.user);
                    this.messageService.add(
                        {
                            life: 3000, severity: 'success', summary: 'connected', detail: 'connected'
                        }
                    );
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
                    ];
                    this.router.navigate(['/pages/home']);
                }
            }
        );
    }

    get user() {
        return this.service.user;
    }

    set user(u: User) {
        this.service.user = u;
    }

    ngOnInit(): void {
    }
}
