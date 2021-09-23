import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../../controller/model/class-room.model';
import {EtudiantClassRoom} from '../../../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../../../controller/model/quiz-class-room.model';
import {Prof} from '../../../../../controller/model/prof.model';
import {LoginService} from '../../../../../controller/service/login.service';


@Component({
    selector: 'app-class-room-list',
    templateUrl: './class-room-list.component.html',
    styleUrls: ['./class-room-list.component.scss']
})
export class ClassRoomListComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private serviceUser: LoginService, private service: ClassRoomService) {
    }

    get viewDialogEtudiant(): boolean {
        return this.service.viewDialogEtudiant;
    }

    set viewDialogEtudiant(value: boolean) {
        this.service.viewDialogEtudiant = value;
    }

    get viewDialogQuiz(): boolean {
        return this.service.viewDialogQuiz;
    }

    set viewDialogQuiz(value: boolean) {
        this.service.viewDialogQuiz = value;
    }

    get selectedetudiantClassRoom(): EtudiantClassRoom {
        return this.service.selectedetudiantClassRoom;
    }

    set selectedetudiantClassRoom(value: EtudiantClassRoom) {
        this.service.selectedetudiantClassRoom = value;
    }

    get selectedquizClassRoom(): QuizClassRoom {
        return this.service.selectedquizClassRoom;
    }

    set selectedquizClassRoom(value: QuizClassRoom) {
        this.service.selectedquizClassRoom = value;
    }

    get itemsetudiantClassRoom(): Array<EtudiantClassRoom> {
        return this.service.itemsetudiantClassRoom;
    }

    set itemsetudiantClassRoom(value: Array<EtudiantClassRoom>) {
        this.service.itemsetudiantClassRoom = value;
    }

    get itemsquizClassRoom(): Array<QuizClassRoom> {
        return this.service.itemsquizClassRoom;
    }

    set itemsquizClassRoom(value: Array<QuizClassRoom>) {
        this.service.itemsquizClassRoom = value;
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

    set itemsclassRoom(value: Array<ClassRoom>) {
        this.service.itemsclassRoom = value;
    }

    get selectesclassRoom(): Array<ClassRoom> {
        return this.service.selectesclassRoom;
    }

    set selectesclassRoom(value: Array<ClassRoom>) {
        this.service.selectesclassRoom = value;
    }

    get selectedprof(): Prof {
        return this.service.selectedprof;
    }

    set selectedprof(value: Prof) {
        this.service.selectedprof = value;
    }

    get itemsprof(): Array<Prof> {
        return this.service.itemsprof;
    }

    set itemsprof(value: Array<Prof>) {
        this.service.itemsprof = value;
    }

    ngOnInit(): void {
        this.selectedprof.id = this.serviceUser.prof.id;
        this.service.afficheClass().subscribe(data => this.itemsclassRoom = data);
    }

    public FindEtudiant(etudiantClassRoom1: ClassRoom) {
        this.selectedclassRoom = etudiantClassRoom1;
        this.service.afficheEtudiant().subscribe(
            data => {
                this.itemsetudiantClassRoom = data;
            });
    }

    public FindQuiz(etudiantClassRoom1: ClassRoom) {
        this.selectedclassRoom = etudiantClassRoom1;
        this.service.afficheQuiz().subscribe(
            data => {
                this.itemsquizClassRoom = data;
            });
    }

    public viewEtudiant(etudiantClassRoom1: ClassRoom) {
        this.selectedclassRoom = {...etudiantClassRoom1};
        this.viewDialogEtudiant = true;
    }

    public viewQuiz(quiz: ClassRoom) {
        this.selectedclassRoom = {...quiz};
        this.viewDialogQuiz = true;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'description', header: 'Description'},
            {field: 'responsable', header: 'Responsable'},
            {field: 'etudiantClassRoomList', header: 'EtudiantClassRoomList'},
            {field: 'quizClassRoomList', header: 'QuizClassRoomList'}
        ];
    }

}
