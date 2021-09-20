import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {Parcours} from '../../../controller/model/parcours.model';
import {Cours} from '../../../controller/model/cours.model';

@Component({
    selector: 'app-cours-edit',
    templateUrl: './cours-edit.component.html',
    styleUrls: ['./cours-edit.component.scss']
})
export class CoursEditComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    set selectedcours(value: Cours) {
        this.service.selectedcours = value;
    }

    get itemscours(): Array<Cours> {
        return this.service.itemscours;
    }

    set itemscours(value: Array<Cours>) {
        this.service.itemscours = value;
    }

    get editDialogCours(): boolean {
        return this.service.editDialogCours;
    }

    set editDialogCours(value: boolean) {
        this.service.editDialogCours = value;
    }

    get submittedCours(): boolean {
        return this.service.submittedCours;
    }

    set submittedCours(value: boolean) {
        this.service.submittedCours = value;
    }

    get itemsparcours(): Array<Parcours> {
        return this.service.itemsparcours;
    }

    set itemsparcours(value: Array<Parcours>) {
        this.service.itemsparcours = value;
    }

    ngOnInit(): void {
    }

    public urlfind(link: any) {
        if (link !== null) {
            const found = link.match(/d\/([A-Za-z0-9\-\_]+)/);
            if (found !== null) {
                console.log('hadaaaaa found== ' + found[1]);
                return 'https://drive.google.com/uc?export=view&id=' + found[1];
            }
        }
        return link;
    }

    public edit() {
        this.submittedCours = true;
        if (this.selectedcours.id) {
            if (this.selectedcours.image) {
                this.selectedcours.image = this.urlfind(this.selectedcours.image);
            }
            this.itemscours[this.service.findCoursIndexById(this.selectedcours.id)] = this.selectedcours;
            this.service.updateCours().subscribe(data => {
                this.selectedcours = data;
                // tslint:disable-next-line:no-shadowed-variable
                this.service.afficheCours().subscribe(data => this.itemscours = data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Cours Updated',
                    life: 3000
                });
            });
        }
        this.editDialogCours = false;
        this.selectedcours = new Cours();

    }

    public hideEditDialog() {
        this.editDialogCours = false;
    }

    findAllParcours() {
        this.service.init().subscribe(data => {
            this.itemsparcours = data;
        });
    }

}
