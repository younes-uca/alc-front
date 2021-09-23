import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SyntheseSessionCoursService} from '../../../../controller/service/synthese-session-cours.service';
import {SyntheseSessionCours} from '../../../../controller/model/synthese-session-cours.model';


@Component({
    selector: 'app-synthese-session-cours-create',
    templateUrl: './synthese-session-cours-create.component.html',
    styleUrls: ['./synthese-session-cours-create.component.scss']
})
export class SyntheseSessionCoursCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: SyntheseSessionCoursService) {
    }

    get selected(): SyntheseSessionCours {
        return this.service.selected;
    }

    set selected(value: SyntheseSessionCours) {
        this.service.selected = value;
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

    get items(): Array<SyntheseSessionCours> {
        return this.service.items;
    }

    set items(value: Array<SyntheseSessionCours>) {
        this.service.items = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.reference.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Synthese-Session-Cours Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new SyntheseSessionCours();
        }
    }


}
