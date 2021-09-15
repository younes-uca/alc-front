import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Router} from '@angular/router';
import {UserService} from '../../../controller/service/user.service';
import {User} from '../../../controller/model/user.model';
import {LocaleStorageService} from '../../../controller/service/locale-storage.service';

@Component({
    selector: 'app-login-etudiant',
    templateUrl: './login-etudiant.component.html',
    styleUrls: ['./login-etudiant.component.scss']
})
export class LoginEtudiantComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: UserService, private router: Router, private localeStorageService: LocaleStorageService
    ) {

    }

    get model(): any[] {
        return this.service.model;
    }

    set model(value: any[]) {
        this.service.model = value;
    }


    get user(): User {
        return this.service.user;
    }

    set user(value: User) {
        this.service.user = value;
    }

    public signin() {
        this.service.signin().subscribe(
            data => {
                this.localeStorageService.set('user', data.user);
                this.localeStorageService.set('token', data.token);
                this.model = [
                    {label: 'Courses ', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages/etudiantparcours']},
                    {label: 'FAQ ', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/faq-student']},
                    {label: 'News ', icon: 'pi pi-fw pi-clock', routerLink: ['/pages/news-student']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/scheduleStudent']},
                    {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
                ];
                this.router.navigate(['/pages/etudiantparcours']);
            },
            error => {
            });
    }

    public choose() {
        document.getElementById('log-pass').style.visibility = 'hidden';
    }

    ngOnInit(): void {
    }

}
