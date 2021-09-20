import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AdminService} from '../../controller/service/admin.service';
import {Admin} from '../../controller/model/admin.model';
import {Router} from '@angular/router';


@Component({
    selector: 'app-inscription-admin',
    templateUrl: './inscription-admin.component.html',
    styleUrls: ['./inscription-admin.component.scss']
})
export class InscriptionAdminComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: AdminService, private router: Router) {
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get items(): Array<Admin> {
        return this.service.items;
    }

    set items(value: Array<Admin>) {
        this.service.items = value;
    }

    get selected(): Admin {
        return this.service.selected;
    }

    set selected(value: Admin) {
        this.service.selected = value;
    }

    ngOnInit(): void {
        this.selected = new Admin();
        // tslint:disable-next-line:no-unused-expression
        this.selected.login = '';
        this.selected.password = '';
    }

    public save() {
        this.submitted = true;
        this.service.save().subscribe(
            data => {
                this.selected = new Admin();
                console.log('meryem');
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
    }
}
