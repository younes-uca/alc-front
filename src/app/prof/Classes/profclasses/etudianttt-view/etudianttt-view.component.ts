import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../controller/model/class-room.model';
import {EtudiantClassRoom} from '../../../../controller/model/etudiant-class-room.model';


@Component({
    selector: 'app-etudianttt-view',
    templateUrl: './etudianttt-view.component.html',
    styleUrls: ['./etudianttt-view.component.scss']
})
export class EtudiantttViewComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ClassRoomService) {
    }

    get viewDialogEtudiant(): boolean {
        return this.service.viewDialogEtudiant;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set viewDialogEtudiant(value: boolean) {
        this.service.viewDialogEtudiant = value;
    }

    get selectedclassRoom(): ClassRoom {
        return this.service.selectedclassRoom;
    }

    set selectedclassRoom(value: ClassRoom) {
        this.service.selectedclassRoom = value;
    }

    get itemsclassRoom(): Array<ClassRoom> {
        return this.service.itemsclassRoom;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set itemsclassRoom(value: Array<ClassRoom>) {
        this.service.itemsclassRoom = value;
    }

    get itemsetudiantClassRoom(): Array<EtudiantClassRoom> {
        return this.service.itemsetudiantClassRoom;
    }

    set itemsetudiantClassRoom(value: Array<EtudiantClassRoom>) {
        this.service.itemsetudiantClassRoom = value;
    }

    get selectedetudiantClassRoom(): EtudiantClassRoom {
        return this.service.selectedetudiantClassRoom;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedetudiantClassRoom(value: EtudiantClassRoom) {
        this.service.selectedetudiantClassRoom = value;
    }

    get selectesetudiantClassRoom(): Array<EtudiantClassRoom> {
        return this.service.selectesetudiantClassRoom;
    }

    set selectesetudiantClassRoom(value: Array<EtudiantClassRoom>) {
        this.service.selectesetudiantClassRoom = value;
    }

    get selectesclassRoom(): Array<ClassRoom> {
        return this.service.selectesclassRoom;
    }

    set selectesclassRoom(value: Array<ClassRoom>) {
        this.service.selectesclassRoom = value;
    }

    public hideViewDialog() {
        this.viewDialogEtudiant = false;
    }

    ngOnInit(): void {
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'etudiant', header: 'Etudiant'},
            {field: 'classRoom', header: 'ClassRoom'}
        ];
    }

}
