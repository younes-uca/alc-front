import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtudiantService} from '../../../controller/service/etudiant.service';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Centre} from '../../../controller/model/centre.model';
import {Parcours} from '../../../controller/model/parcours.model';
import {Prof} from '../../../controller/model/prof.model';


@Component({
    selector: 'app-etudiant-create',
    templateUrl: './etudiant-create.component.html',
    styleUrls: ['./etudiant-create.component.scss']
})
export class EtudiantCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: EtudiantService) {
    }

    get itemsprof(): Array<Prof> {
        return this.service.itemsprof;
    }

    set itemsprof(value: Array<Prof>) {
        this.service.itemsprof = value;
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

    get selected(): Etudiant {
        return this.service.selected;
    }

    set selected(value: Etudiant) {
        this.service.selected = value;
    }

    get createDialogEtud(): boolean {
        return this.service.createDialog;
    }

    set createDialogEtud(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Etudiant> {
        return this.service.items;
    }

    set items(value: Array<Etudiant>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialogEtud = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.nom.trim()) {
            this.service.save().subscribe(data => {
                // tslint:disable-next-line:no-shadowed-variable
                this.service.findAll().subscribe(data => this.items = data);
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Etudiant Created',
                    life: 3000
                });
            });
            this.createDialogEtud = false;
            this.selected = new Etudiant();
        }
    }

    public findAllProf() {
        this.service.findAllProf().subscribe(data => this.itemsprof = data);
    }

    public findAllCentre() {
        this.service.findAllCentre().subscribe(data => this.centreList = data);
    }

    public findAllParcours() {
        this.service.findAllParcours().subscribe(data => this.parcoursList = data);
    }


}
