import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProfService} from '../../../../controller/service/prof.service';
import {Prof} from '../../../../controller/model/prof.model';
import {CategorieProf} from '../../../../controller/model/categorie-prof.model';
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
        document.getElementById('log-pass').style.visibility = 'hidden';
        document.getElementById('log-pass').style.height = '0px';
        document.getElementById('log-pass').style.width = '0px';
        this.selectedProf = new Prof();
    }

    public save() {
        this.selectedProf.categorieProf.id = 1;
        this.submitted = true;
        this.service.save().subscribe(
            data => {
                this.selectedProf = new Prof();
                console.log('meryem');
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Inscription added',
                    life: 3000
                });
                document.getElementById('log-pass').style.visibility = 'hidden';
                document.getElementById('log-pass').style.height = '0%';
                document.getElementById('log-pass').style.width = '0%';
                this.router.navigate(['/']);
            }, error => {
                document.getElementById('log-pass').style.visibility = 'visible';
                document.getElementById('log-pass').style.height = '100%';
                document.getElementById('log-pass').style.width = '100%';
            });
    }

    findAllCategorieProf() {
        this.service.findAllCategorieProf().subscribe(data => {
            this.service.itemsCategorieProf = data;
        });
    }

}
