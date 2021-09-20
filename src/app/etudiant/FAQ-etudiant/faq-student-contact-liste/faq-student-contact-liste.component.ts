import {Component, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import {FaqService} from '../../../controller/service/faq.service';
import {LoginService} from '../../../controller/service/login.service';
import {FaqType} from '../../../controller/model/faq-type.model';
import {Faq} from '../../../controller/model/faq.model';

@Component({
    selector: 'app-faq-student-contact-liste',
    templateUrl: './faq-student-contact-liste.component.html',
    styleUrls: ['./faq-student-contact-liste.component.scss']
})
export class FaqStudentContactListeComponent implements OnInit {

    nodes: TreeNode[];
    menu: MenuItem[];

    constructor(private http: HttpClient, private service: FaqService, private login: LoginService) {
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


    public view(faqType: FaqType) {
        this.selectedType = {...faqType};

    }

    public viewContact() {
        this.viewDialogFaqContact = true;
    }


    public initType() {
        this.service.findTypes('student').subscribe(data => {
            this.itemsType = data;
            console.log(this.itemsType);
            this.menu = [];
            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < this.itemsType.length; j++) {
                console.log('avant ' + this.itemsType[j].id);
                this.menu.push({
                    label: this.itemsType[j].libelle, command: (event) => {
                        this.selectedType = this.itemsType[j];
                        this.id = this.itemsType[j].id;
                        console.log('apres ' + this.itemsType[j].id);
                    }
                });
            }
        }, error => console.log('erreur'));
    }

    public init() {
        console.log(this.login.etudiant.id);
        console.log(this.id);
        console.log(this.itemsType);
        this.service.findMyQuestionsEtudiant(this.login.etudiant.id, this.id).subscribe(data => {
            this.items = data;
            console.log(this.items);
            this.nodes = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.items.length; i++) {
                this.nodes.push(
                    {
                        label: this.items[i].libelle,
                        children: [
                            {label: this.items[i].description, type: 'string'}
                        ]
                    }
                );
            }
        });
    }

    public findFirstFaq() {
        this.service.findTypes('student').subscribe(data => {
            this.itemsType = data;
            console.log(this.login.etudiant.id);
            console.log(this.itemsType[0].id);
            this.service.findMyQuestionsEtudiant(this.login.etudiant.id, this.itemsType[0].id).subscribe(data => {
                this.items = data;
                console.log(this.items);
                this.nodes = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.items.length; i++) {
                    this.nodes.push(
                        {
                            label: this.items[i].libelle,
                            children: [
                                {label: this.items[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            });
        }, error => console.log('erreur'));
    }

    ngOnInit(): void {
        this.initType();
        this.findFirstFaq();
    }

}
