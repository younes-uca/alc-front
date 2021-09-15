import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InscriptionService} from '../../../../controller/service/inscription.service';
import {Inscription} from '../../../../controller/model/inscription.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {Parcours} from '../../../../controller/model/parcours.model';
import {Centre} from '../../../../controller/model/centre.model';
import {Router} from '@angular/router';

@Component({
    templateUrl: './formlayoutdemo.component.html',
    styleUrls: ['./formlayoutdemo.css']
})
export class FormLayoutDemoComponent implements OnInit {
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: InscriptionService, private router: Router) {
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get selectes(): Array<Inscription> {
        return this.service.selectes;
    }

    set selectes(value: Array<Inscription>) {
        this.service.selectes = value;
    }

    get selectedetudiant(): Etudiant {
        return this.service.selectedetudiant;
    }

    set selectedetudiant(value: Etudiant) {
        this.service.selectedetudiant = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }

    get parcours(): Parcours {
        return this.service.etudiant.parcours;
    }

    get centre(): Centre {
        return this.service.etudiant.parcours.centre;
    }

    get centreList(): Array<Centre> {

        return this.service.centreList;
    }

    set centreList(value: Array<Centre>) {
        this.service.centreList = value;
    }

    get parcoursList(): Array<Parcours> {
        return this.service.parcoursList;
    }

    set parcoursList(value: Array<Parcours>) {
        this.service.parcoursList = value;
    }

    ngOnInit(): void {
        this.selected = new Inscription();
        this.selected.datedebutinscription = new Date();
        document.getElementById('log-pass').style.visibility = 'hidden';
        document.getElementById('log-pass').style.height = '0%';
        document.getElementById('log-pass').style.width = '0%';
        this.service.findAllParcours().subscribe(data => this.parcoursList = data);
    }

    // tslint:disable-next-line:typedef
    public save() {
        this.submitted = true;
        this.selected.datefininscription = new Date();
        console.log(this.selected.parcours.id);
        this.service.save().subscribe(data => {
            this.selectes.push({...data});
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Registration added',
                life: 3000
            });
        }, error => {
            this.messageService.add({
                severity: 'error',
                summary: 'Warning',
                detail: 'Registration canceled',
                life: 3000
            });
        });
        this.selected = new Inscription();
    }

    public findAllCentre() {
        this.service.findAllCentre().subscribe(data => this.centreList = data);
    }
}
