import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Parcours} from '../../../controller/model/parcours.model';
import {Cours} from '../../../controller/model/cours.model';
import {Centre} from '../../../controller/model/centre.model';
import {ParcoursService} from '../../../controller/service/parcours.service';


@Component({
    selector: 'app-cours-create',
    templateUrl: './cours-create.component.html',
    styleUrls: ['./cours-create.component.scss']
})
export class CoursCreateComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get itemscentre(): Array<Centre> {
        return this.service.itemscentre;
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    set selectedcours(value: Cours) {
        this.service.selectedcours = value;
    }

    get itemsparcours(): Array<Parcours> {
        return this.service.itemsparcours;
    }

    set itemsparcours(value: Array<Parcours>) {
        this.service.itemsparcours = value;
    }

    get itemscours(): Array<Cours> {
        return this.service.itemscours;
    }

    set itemscours(value: Array<Cours>) {
        this.service.itemscours = value;
    }

    get submittedCours(): boolean {
        return this.service.submittedCours;
    }

    set submittedCours(value: boolean) {
        this.service.submittedCours = value;
    }

    get createDialogCours(): boolean {
        return this.service.createDialogCours;
    }

    set createDialogCours(value: boolean) {
        this.service.createDialogCours = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialogCours = false;
        this.submittedCours = false;
    }

    findAllParcours() {
        this.service.init().subscribe(data => {
            this.itemsparcours = data;
        });
    }

    public urlfind(link: any) {
        if (link !== null) {
            const url = link;
            const found = url.match(/d\/([A-Za-z0-9\-\_]+)/);
            if (found !== null) {
                console.log('hadaaaaa found== ' + found[1]);
                return 'https://drive.google.com/uc?export=view&id=' + found[1];
            }
        }
        return link;
    }

    public saveCours() {
        this.submittedCours = true;
        if (this.selectedcours.id == null) {
            if (this.selectedcours.image) {
                this.selectedcours.image = this.urlfind(this.selectedcours.image);
            }
            this.service.SaveCours().subscribe(data => {
                // @ts-ignore
                this.itemscours.push({...data});
                // tslint:disable-next-line:no-shadowed-variable
                this.service.afficheCours().subscribe(data => this.itemscours = data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Cours Created',
                    life: 3000
                });
            });
            this.createDialogCours = false;
            this.selectedcours = new Cours();
        }
    }
}
