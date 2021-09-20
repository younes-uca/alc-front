import {Component, OnInit} from '@angular/core';
import {FaqService} from '../../../controller/service/faq.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {FaqProf} from '../../../controller/model/faq-prof.model';
import {FaqType} from '../../../controller/model/faq-type.model';
import {Faq} from '../../../controller/model/faq.model';
import {LoginService} from '../../../controller/service/login.service';
import {FaqEtudiant} from '../../../controller/model/faq-etudiant.modele';

@Component({
    selector: 'app-faq-answer',
    templateUrl: './faq-answer.component.html',
    styleUrls: ['./faq-answer.component.scss']
})
export class FaqAnswerComponent implements OnInit {


    answer: string;
    nodes: TreeNode[];
    menu: MenuItem[];
    utilisateur: string;
    by: string;

    constructor(private service: FaqService, private login: LoginService) {
    }

    get selectedFaqProf(): FaqProf {
        return this.service.selectedFaqProf;
    }

    set selectedFaqProf(value: FaqProf) {
        this.service.selectedFaqProf = value;
    }

    get viewDialogFaqContact(): boolean {
        return this.service.viewDialogFaqContact;
    }

    set viewDialogFaqContact(value: boolean) {
        this.service.viewDialogFaqContact = value;
    }

    get id(): number {
        return this.service.id;
    }

    set id(value: number) {
        this.service.id = value;
    }

    get selectedType(): FaqType {
        return this.service.selectedType;
    }

    set selectedType(value: FaqType) {
        this.service.selectedType = value;
    }

    get items(): Array<Faq> {
        return this.service.items;
    }

    set items(value: Array<Faq>) {
        this.service.items = value;
    }

    get selected(): Faq {
        return this.service.selected;
    }

    set selected(value: Faq) {
        this.service.selected = value;
    }

    get itemsType(): Array<FaqType> {
        return this.service.itemsType;
    }

    set itemsType(value: Array<FaqType>) {
        this.service.itemsType = value;
    }

    get selectedFaqEtudiant(): FaqEtudiant {
        return this.service.selectedFaqEtudiant;
    }

    set selectedFaqEtudiant(value: FaqEtudiant) {
        this.service.selectedFaqEtudiant = value;
    }

    public update(libelle: string) {
        if (this.utilisateur == 'teacher') {
            this.service.findFaqProfByLibelle(libelle).subscribe(
                data => {
                    this.selectedFaqProf = data;
                    console.log(this.selectedFaqProf);
                    this.selectedFaqProf.description = this.answer;
                    this.selectedFaqProf.admin = this.login.admin;
                    this.service.updateFaqrof(this.selectedFaqProf).subscribe(
                        data => {
                            this.menu = [
                                {
                                    label: 'Teacher', command: (event) => {
                                        this.utilisateur = 'teacher';
                                    }
                                },
                                {
                                    label: 'Student', command: (event) => {
                                        this.utilisateur = 'student';
                                    }
                                },
                            ];

                            this.utilisateur = 'teacher';
                            if (this.utilisateur == 'teacher') {
                                this.service.findFaqProf().subscribe(data => {
                                    this.items = data;
                                    this.nodes = [];
                                    // tslint:disable-next-line:prefer-for-of
                                    for (let i = 0; i < this.items.length; i++) {
                                        this.nodes.push(
                                            {
                                                label: this.items[i].libelle, key: this.items[i].libelle,
                                                children: [
                                                    {label: this.items[i].description, type: 'string'}
                                                ]
                                            }
                                        );
                                    }
                                });
                            } else if (this.utilisateur == 'student') {
                                this.service.findFaqEtudiant().subscribe(data => {
                                    this.items = data;
                                    this.nodes = [];
                                    // tslint:disable-next-line:prefer-for-of
                                    for (let i = 0; i < this.items.length; i++) {
                                        this.nodes.push(
                                            {
                                                label: this.items[i].libelle, key: this.items[i].libelle,
                                                children: [
                                                    {label: this.items[i].description, type: 'string'}
                                                ]
                                            }
                                        );
                                    }
                                });
                            }
                        }, error => {
                            console.log('erreur');
                        }
                    );
                }
            );
        } else if (this.utilisateur == 'student') {
            this.service.findFaqEtudiantByLibelle(libelle).subscribe(
                data => {
                    this.selectedFaqEtudiant = data;
                    this.selectedFaqEtudiant.description = this.answer;
                    this.selectedFaqEtudiant.admin = this.login.admin;
                    console.log(this.selectedFaqEtudiant);
                    this.service.updateFaqEtudiant(this.selectedFaqEtudiant).subscribe(
                        data => {
                            this.menu = [
                                {
                                    label: 'Teacher', command: (event) => {
                                        this.utilisateur = 'teacher';
                                    }
                                },
                                {
                                    label: 'Student', command: (event) => {
                                        this.utilisateur = 'student';
                                    }
                                },
                            ];

                            this.utilisateur = 'teacher';
                            if (this.utilisateur == 'teacher') {
                                this.service.findFaqProf().subscribe(data => {
                                    this.items = data;
                                    this.nodes = [];
                                    // tslint:disable-next-line:prefer-for-of
                                    for (let i = 0; i < this.items.length; i++) {
                                        this.nodes.push(
                                            {
                                                label: this.items[i].libelle, key: this.items[i].libelle,
                                                children: [
                                                    {label: this.items[i].description, type: 'string'}
                                                ]
                                            }
                                        );
                                    }
                                });
                            } else if (this.utilisateur == 'student') {
                                this.service.findFaqEtudiant().subscribe(data => {
                                    this.items = data;
                                    this.nodes = [];
                                    // tslint:disable-next-line:prefer-for-of
                                    for (let i = 0; i < this.items.length; i++) {
                                        this.nodes.push(
                                            {
                                                label: this.items[i].libelle, key: this.items[i].libelle,
                                                children: [
                                                    {label: this.items[i].description, type: 'string'}
                                                ]
                                            }
                                        );
                                    }
                                });
                            }
                        }, error => {
                            console.log('erreur');
                        }
                    );
                }
            );
        }

    }

    public init() {
        this.answer = '';
        if (this.utilisateur == 'teacher') {
            this.service.findFaqProf().subscribe(data => {
                this.items = data;
                this.nodes = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.items.length; i++) {
                    this.nodes.push(
                        {
                            label: this.items[i].libelle, key: this.items[i].libelle,
                            children: [
                                {label: this.items[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            });
        } else if (this.utilisateur == 'student') {
            this.service.findFaqEtudiant().subscribe(data => {
                this.items = data;
                this.nodes = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.items.length; i++) {
                    this.nodes.push(
                        {
                            label: this.items[i].libelle, key: this.items[i].libelle,
                            children: [
                                {label: this.items[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            });
        }
    }

    public initUtilisateur() {
        this.menu = [
            {
                label: 'Teacher', command: (event) => {
                    this.utilisateur = 'teacher';
                }
            },
            {
                label: 'Student', command: (event) => {
                    this.utilisateur = 'student';
                }
            },
        ];

        this.utilisateur = 'teacher';
        if (this.utilisateur == 'teacher') {
            this.service.findFaqProf().subscribe(data => {
                this.items = data;
                this.nodes = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.items.length; i++) {
                    this.nodes.push(
                        {
                            label: this.items[i].libelle, key: this.items[i].libelle,
                            children: [
                                {label: this.items[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            });
        } else if (this.utilisateur == 'student') {
            this.service.findFaqEtudiant().subscribe(data => {
                this.items = data;
                this.nodes = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.items.length; i++) {
                    this.nodes.push(
                        {
                            label: this.items[i].libelle, key: this.items[i].libelle,
                            children: [
                                {label: this.items[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            });
        }
    }

    ngOnInit(): void {
        this.initUtilisateur();
    }

}
