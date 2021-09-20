import {Component, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import {FaqService} from '../../../../controller/service/faq.service';
import {FaqType} from '../../../../controller/model/faq-type.model';
import {Faq} from '../../../../controller/model/faq.model';

@Component({
    selector: 'app-faq-student-list',
    templateUrl: './faq-student-list.component.html',
    styleUrls: ['./faq-student-list.component.scss']
})
export class FaqStudentListComponent implements OnInit {

    nodes: TreeNode[];
    menu: MenuItem[];

    constructor(private http: HttpClient, private service: FaqService) {
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

    get viewDialogFaqEtudiantContact(): boolean {
        return this.service.viewDialogFaqEtudiantContact;
    }

    set viewDialogFaqEtudiantContact(value: boolean) {
        this.service.viewDialogFaqEtudiantContact = value;
    }

    public view(faqType: FaqType) {
        this.selectedType = {...faqType};

    }

    public viewContact() {
        this.viewDialogFaqEtudiantContact = true;
    }


    public initType() {
        this.service.findTypes('student').subscribe(data => {
            this.itemsType = data;
            this.menu = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.itemsType.length; i++) {
                this.menu.push({
                    label: this.itemsType[i].libelle, command: (event) => {
                        this.selectedType = this.itemsType[i];
                        this.id = this.itemsType[i].id;
                    }
                });
            }
        }, error => console.log('erreur'));
    }

    public init() {
        this.service.findByFaqType(this.id).subscribe(data => {
            this.items = data;
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
            this.service.findByFaqType(this.itemsType[0].id).subscribe(data => {
                this.items = data;
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
