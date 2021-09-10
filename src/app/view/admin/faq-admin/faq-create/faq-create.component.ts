import {Component, OnInit} from '@angular/core';
import {FaqService} from '../../../../controller/service/faq.service';
import {Faq} from '../../../../controller/model/faq.model';
import {FaqType} from '../../../../controller/model/faq-type.model';

@Component({
    selector: 'app-faq-create',
    templateUrl: './faq-create.component.html',
    styleUrls: ['./faq-create.component.scss']
})
export class FaqCreateComponent implements OnInit {

    utilisateurs: any[];
    types: FaqType[];
    utilisateur: string;
    type: FaqType;
    libelle: string;
    description: string;

    constructor(private service: FaqService) {
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

    public findTypes() {

        for (let j = 0; j < this.utilisateurs.length; j++) {
            if (this.utilisateur == this.utilisateurs[j]) {
                this.service.findTypes(this.utilisateurs[j].label).subscribe(
                    data => {
                        this.itemsType = data;
                        this.types = [];
                        for (let i = 0; i < this.itemsType.length; i++) {
                            this.types.push(
                                {
                                    id: this.itemsType[i].id,
                                    libelle: this.itemsType[i].libelle,
                                    destinataire: this.itemsType[i].destinataire,
                                    faq: this.itemsType[i].faq
                                }
                            );
                        }
                    });
            }
        }
        console.log(this.utilisateur);
        console.log(this.type);
    }

    public save() {
        if (this.type == null) {
            this.type = this.itemsType[0];
        }
        this.selected.faqType = this.type;
        this.selected.description = this.description;
        this.selected.libelle = this.libelle;
        this.service.save(this.selected).subscribe(data => this.selected = new Faq());
    }

    ngOnInit(): void {
        this.utilisateurs = [
            {label: 'teacher'},
            {label: 'student'},
        ];
        this.utilisateur = this.utilisateurs[0];
        this.type = this.itemsType[0];
        this.findTypes();
    }

}
