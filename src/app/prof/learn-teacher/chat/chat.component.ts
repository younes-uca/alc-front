import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebSocketService} from '../../../controller/service/web-socket.service';
import {ChatMessageDto} from '../../../controller/model/chatMessageDto';
import {LoginService} from '../../../controller/service/login.service';
import {ProfService} from '../../../controller/service/prof.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
    today = Date.now();

    constructor(public webSocketService: WebSocketService, public service: LoginService, public serviceprof: ProfService) {
    }

    ngOnInit(): void {
        this.webSocketService.findbynumero(this.service.prof.id);
        this.webSocketService.findstudentlist(this.service.prof.id);
        this.webSocketService.openWebSocket();
    }

    ngOnDestroy(): void {
        this.webSocketService.closeWebSocket();
    }


    sendMessage(sendForm: NgForm) {
        const chatMessageDto = new ChatMessageDto(this.service.prof.nom, sendForm.value.message, false);
        this.webSocketService.sendMessage(chatMessageDto);
        console.log(this.service.prof.chatMessageDto);
        sendForm.controls.message.reset();
    }
}
