import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InscriptionService} from '../../../controller/service/inscription.service';
import {Inscription} from '../../../controller/model/inscription.model';
import {Parcours} from '../../../controller/model/parcours.model';
import {EtatInscription} from '../../../controller/model/etat-inscription.model';
import {Prof} from '../../../controller/model/prof.model';

@Component({
    selector: 'app-inscription-edit',
    templateUrl: './inscription-edit.component.html',
    styleUrls: ['./inscription-edit.component.scss']
})
export class InscriptionEditComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private service: InscriptionService, private confirmationService: ConfirmationService,) {
    }
    public view(inscription: Inscription) {
        this.selected = {...inscription};
        this.viewDialog = true;
    }
    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get parcoursList(): Array<Parcours> {
        return this.service.parcoursList;
    }

    set parcoursList(value: Array<Parcours>) {
        this.service.parcoursList = value;
    }

    get profList(): Array<Prof> {
        return this.service.prof;
    }

    set profList(value: Array<Prof>) {
        this.service.prof = value;
    }

    get etatinscriptionslist(): Array<EtatInscription> {
        return this.service.etatinscriptionslist;
    }

    set etatinscriptionslist(value: Array<EtatInscription>) {
        this.service.etatinscriptionslist = value;
    }

    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Inscription> {
        return this.service.items;
    }

    set items(value: Array<Inscription>) {
        this.service.items = value;
    }
    get prof(): Array<Prof> {
        return this.service.prof;
    }

    set prof(value: Array<Prof>) {
        this.service.prof = value;
    }
    ngOnInit(): void {
        this.service.findAllProf().subscribe(
            data => {
                this.prof = data;
            }, error => {
                console.log(error);
            }
        );;
        this.service.findAllEtat().subscribe(
            data => {
                this.etatinscriptionslist = data;
            }, error => {
                console.log(error);
            }
        );
    }

    findAllProf(): void {
        this.service.findAllProf();
    }

    findAllEtat(): void {
        this.service.findAllEtat().subscribe(
            data => {
                this.etatinscriptionslist = data;
            }, error => {
                console.log(error);
            }
        );
        console.log(this.etatinscriptionslist);
        console.log(this.selected.etatInscription.libelle);
    }

    public edit() {
        this.service.findAll().subscribe(data => this.items = data);
        console.log(this.service.selected.id);
        this.submitted = true;
        this.items[this.service.findIndexById(this.service.selected.id)] = this.selected;
        this.service.valider().subscribe(data => {
            this.selected = data;
            // tslint:disable-next-line:no-shadowed-variable
            this.service.findAll().subscribe(data => this.items = data);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'InscriptionUpdated',
                life: 3000
            });
            this.service.findAll().subscribe(data => this.items = data);
        });
        this.editDialog = false;
        this.selected = new Inscription();
    }

    public delete(selected: Inscription) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.nom + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByNumeroInscription().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Inscription();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Inscription Deleted',
                        life: 3000
                    });
                    this.hideEditDialog();
                });
            }
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
    }


}
