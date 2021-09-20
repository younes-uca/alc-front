import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProfService} from '../../controller/service/prof.service';
import {Prof} from '../../controller/model/prof.model';
import {CategorieProf} from '../../controller/model/categorie-prof.model';
import {Router} from '@angular/router';


@Component({
    selector: 'app-inscription-prof',
    templateUrl: './inscription-prof.component.html',
    styleUrls: ['./inscription-prof.component.scss']
})
export class InscriptionProfComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ProfService, private router: Router) {
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get selectedProf(): Prof {
        return this.service.selectedProf;
    }

    set selectedProf(value: Prof) {
        this.service.selectedProf = value;
    }

    get itemsCategorieProf(): Array<CategorieProf> {
        return this.service.itemsCategorieProf;
    }

    set itemsCategorieProf(value: Array<CategorieProf>) {
        this.service.itemsCategorieProf = value;
    }

    ngOnInit(): void {
        this.selectedProf = new Prof();
    }

    public save() {
        this.selectedProf.categorieProf.id = 1;
        this.submitted = true;
        this.service.save().subscribe(
            data => {
                this.selectedProf = new Prof();
                this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Registration added',
                life: 3000,

            });
                console.log('meryem');
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Warning',
                    detail: 'Registration canceled',
                    life: 3000
                });
                console.log('erreur');
            });
        this.selectedProf = new Prof();
    }

    findAllCategorieProf() {
        this.service.findAllCategorieProf().subscribe(data => {
            this.service.itemsCategorieProf = data;
        });
    }

}
