import {Component, OnInit} from '@angular/core';
import {FaqType} from '../../../../controller/model/faq-type.model';
import {MenuItem, TreeNode} from 'primeng/api';
import {FaqService} from '../../../../controller/service/faq.service';
import {LoginService} from '../../../../controller/service/login.service';
import {FaqProf} from '../../../../controller/model/faq-prof.model';
import {FaqEtudiant} from '../../../../controller/model/faq-etudiant.modele';

@Component({
    selector: 'app-faq-student-contact',
    templateUrl: './faq-student-contact.component.html',
    styleUrls: ['./faq-student-contact.component.scss']
})
export class FaqStudentContactComponent implements OnInit {

    types: Array<FaqType>;
    selectedType: FaqType;
    menu: MenuItem[];
    nodes: TreeNode[];
    question: string;

    constructor(private service: FaqService, private login: LoginService) {
    }

    get selectedFaqEtudiant(): FaqEtudiant {
        return this.service.selectedFaqEtudiant;
    }

    get itemsFaqEtudiant(): Array<FaqEtudiant> {
        return this.service.itemsFaqEtudiant;
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


    get viewDialogFaqEtudiantContact(): boolean {
        return this.service.viewDialogFaqEtudiantContact;
    }

    set viewDialogFaqEtudiantContact(value: boolean) {
        this.service.viewDialogFaqEtudiantContact = value;
    }

    get itemsType(): Array<FaqType> {
        return this.service.itemsType;
    }

    set itemsType(value: Array<FaqType>) {
        this.service.itemsType = value;
    }

    public hideViewDialog() {
        this.viewDialogFaqEtudiantContact = false;
    }

    public initType() {
        this.service.findTypes('student').subscribe(data => {
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
        this.selectedFaqEtudiant.faqType = this.selectedType;
        this.selectedFaqEtudiant.libelle = this.question;
        this.selectedFaqEtudiant.admin = null;
        this.selectedFaqEtudiant.etudiant = this.login.etudiant;
        this.selectedFaqEtudiant.description = null;
        this.selectedFaqEtudiant.id = 1;
        this.service.saveFaqEtudiant(this.selectedFaqEtudiant).subscribe(data => {
            this.itemsFaqProf.push({...data});
        }, error => {
            console.log('erreuuuuuuuuuur');
        });
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
    }

}
