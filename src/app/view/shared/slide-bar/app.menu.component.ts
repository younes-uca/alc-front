import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppComponent} from '../../../app.component';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {PublicComponent} from '../../public/public.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {

    // model: any[];

    constructor(public app: AppComponent, public appMain: PublicComponent, private service: LoginService) {
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

    ngOnInit() {

        /*this.model = [
            {
                label: 'Favorites', icon: 'pi pi-fw pi-home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                    {label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']},
                    {label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
                items: [
                    {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                    {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                    {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                    {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                    {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                    {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
                    {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                    {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                    {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],
                items: [
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank'},
                    {label: 'Inscription', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/inscription']},
                    {label: 'Etudiants', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/etudiant']},
                    {label: 'Recommend A teacher', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/recommend']},
                    {label: 'Home', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/home']},
                    {label: 'List Inscrit', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/Inscrit']},
                    {label: 'Salary', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/salary']},
                    {label: 'Courses', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/courses']},
                    {label: 'Parcours', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/parcours']},
                    {label: 'Classes', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/classes']},
                    {label: 'Commande', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/commande']},
                    {label: 'Quiz-Create', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/quiz-create']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/view/schedule']},
                    {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/faq-admin']},
                    {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/news-admin']},
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                    {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},

                    {label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank'},
                    {label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank'},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-ban', routerLink: ['/accessdenied'], target: '_blank'},
                    {label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty']},
                ]
            },
            { label: 'Admin', icon: 'pi pi-fw pi-folder', routerLink: ['/admin'],
                items: [
                    {label: 'Formular Inscriptions', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/Inscrit']},
                    {label: 'Inscriptions List', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/inscription']},
                    {label: 'Student List', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/etudiant']},
                    {label: 'Manage Parcours', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/parcours']},
                    {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/faq-admin']},
                    {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/news-admin']},
                ]
            },
            { label: 'Student', icon: 'pi pi-fw pi-folder', routerLink: ['/student'],
                items: [
                    {label: 'Courses ', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/etudiantcours']},
                ]
            },
            { label: 'Teacher', icon: 'pi pi-fw pi-folder', routerLink: ['/teacher'],
                items: [
                    {label: 'Home', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/home']},
                    {label: 'Recommend A teacher', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/recommend']},
                    {label: 'Salary', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/salary']},
                    {label: 'Parcours', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/parcours']},
                    {label: 'Classes', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/classes']},
                    {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/view/schedule']},
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Start', icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                    },
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
                    }
                ]
            }
        ];*/

    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
        this.appMain.rightPanelMenuActive = false;
    }
}
