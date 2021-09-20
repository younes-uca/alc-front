import {Component, OnInit} from '@angular/core';
import {FaqType} from '../../../controller/model/faq-type.model';
import {MenuItem, TreeNode} from 'primeng/api';
import {FaqService} from '../../../controller/service/faq.service';
import {FaqProf} from '../../../controller/model/faq-prof.model';
import {LoginService} from '../../../controller/service/login.service';

@Component({
    selector: 'app-faq-contact',
    templateUrl: './faq-contact.component.html',
    styleUrls: ['./faq-contact.component.scss']
})
export class FaqContactComponent implements OnInit {

    types: Array<FaqType>;
    selectedType: FaqType;
    menu: MenuItem[];
    nodes: TreeNode[];
    question: string;

    constructor(private service: FaqService, private login: LoginService) {
    }

    get selectedFaqProf(): FaqProf {
        return this.service.selectedFaqProf;
    }

    set selectedFaqProf(value: FaqProf) {
        this.service.selectedFaqProf = value;
    }

    get itemsFaqProf(): Array<FaqProf> {
        return this.service.itemsFaqProf;
    }

    set itemsFaqProf(value: Array<FaqProf>) {
        this.service.itemsFaqProf = value;
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

    get itemsType(): Array<FaqType> {
        return this.service.itemsType;
    }

    set itemsType(value: Array<FaqType>) {
        this.service.itemsType = value;
    }

    public hideViewDialog() {
        this.viewDialogFaqContact = false;
    }

    public initType() {
        console.log('hello');
        this.service.findTypes('teacher').subscribe(data => {
            this.itemsType = data;
            this.types = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.itemsType.length; i++) {
                this.types.push({
                    libelle: this.itemsType[i].libelle,
                    id: this.itemsType[i].id,
                    destinataire: this.itemsType[i].destinataire,
                    faq: this.itemsType[i].faq
                });
            }
        }, error => console.log('erreur'));
    }

    public save() {
        if (this.selectedType == null) {
            this.selectedType = this.itemsType[0];
        }
        this.selectedFaqProf.faqType = this.selectedType;
        this.selectedFaqProf.libelle = this.question;
        this.selectedFaqProf.admin = null;
        this.selectedFaqProf.prof = this.login.prof;
        this.selectedFaqProf.description = null;
        this.selectedFaqProf.id = 1;
        console.log(this.selectedFaqProf.id);
        this.service.saveFaqProf(this.selectedFaqProf).subscribe(data => {
            this.itemsFaqProf.push({...data});
        }, error => {
            console.log('erreuuuuuuuuuur');
        });
    }

    public findFaqProf() {
        this.service.findFaqProf().subscribe(
            data => {
                this.itemsFaqProf = data;
                this.nodes = [];
                for (let i = 0; i < this.itemsFaqProf.length; i++) {
                    if (this.itemsFaqProf[i].description == null) {
                        this.itemsFaqProf[i].description = 'Pas encore repondu';
                    }
                    this.nodes.push(
                        {
                            label: this.itemsFaqProf[i].libelle,
                            children: [
                                {label: this.itemsFaqProf[i].description, type: 'string'}
                            ]
                        }
                    );
                }
            }
        );
    }

    ngOnInit(): void {
        this.initType();
        this.menu = [
            {
                label: 'New Question', icon: 'pi pi-plus-circle', command: (event) => {
                    document.getElementById('new-question').style.visibility = 'visible';
                    document.getElementById('new-question').style.height = '150px';
                    document.getElementById('my-questions').style.visibility = 'hidden';
                    document.getElementById('my-questions').style.height = '10px';
                }
            }
        ];
        this.findFaqProf();
    }

}
