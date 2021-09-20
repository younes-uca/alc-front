import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../controller/model/class-room.model';
import {QuizClassRoom} from '../../../../controller/model/quiz-class-room.model';

@Component({
    selector: 'app-quiz-view',
    templateUrl: './quiz-view.component.html',
    styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ClassRoomService) {
    }

    get viewDialogQuiz(): boolean {
        return this.service.viewDialogQuiz;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set viewDialogQuiz(value: boolean) {
        this.service.viewDialogQuiz = value;
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

    get itemsquizClassRoom(): Array<QuizClassRoom> {
        return this.service.itemsquizClassRoom;
    }

    set itemsquizClassRoom(value: Array<QuizClassRoom>) {
        this.service.itemsquizClassRoom = value;
    }

    get selectedquizClassRoom(): QuizClassRoom {
        return this.service.selectedquizClassRoom;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedquizClassRoom(value: QuizClassRoom) {
        this.service.selectedquizClassRoom = value;
    }

    get selectesquizClassRoom(): Array<QuizClassRoom> {
        return this.service.selectesquizClassRoom;
    }

    set selectesquizClassRoom(value: Array<QuizClassRoom>) {
        this.service.selectesquizClassRoom = value;
    }

    get selectesclassRoom(): Array<ClassRoom> {
        return this.service.selectesclassRoom;
    }

    set selectesclassRoom(value: Array<ClassRoom>) {
        this.service.selectesclassRoom = value;
    }

    public hideViewDialog() {
        this.viewDialogQuiz = false;
    }

    ngOnInit(): void {
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'quiz', header: 'Quiz'},
            {field: 'classRoom', header: 'ClassRoom'}
        ];
    }

}
