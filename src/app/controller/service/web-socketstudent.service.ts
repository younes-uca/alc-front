import {Injectable} from '@angular/core';
import {ChatMessageDto} from '../model/chatMessageDto';
import {EtudiantService} from './etudiant.service';
import {Etudiant} from '../model/etudiant.model';
import {LoginService} from './login.service';
import {ProfService} from './prof.service';
import {Prof} from '../model/prof.model';

@Injectable({
    providedIn: 'root'
})
export class WebSocketstudentService {

    webSocket: WebSocket;
    chatMessages: ChatMessageDto[] = [];
    students: Etudiant[];
    idprof: number;

    constructor(private serviceetudiant: EtudiantService, private loginservice: LoginService, private serviceprof: ProfService) {
    }

    public openWebSocket() {
        this.webSocket = new WebSocket('ws://localhost:8036/chat');
        this.webSocket.onopen = (event) => {
            console.log('Open: ', event);
        };
        this.webSocket.onmessage = (event) => {
            const chatMessageDto = JSON.parse(event.data);
            // console.log('ha boite prof' + this.loginservice.etudiant.prof.chatMessageDto);
            // this.idprof = this.loginservice.etudiant.prof.id;
            // console.log('ha id d prof detydiant' + this.loginservice.etudiant.prof.id);
            // console.log('ha students ' + this.findstudentlist(this.idprof));
            // console.log();
            console.log(JSON.parse(event.data));

            // if (this.loginservice.etudiant.prof.chatMessageDto === undefined){
            //   this.loginservice.etudiant.prof.chatMessageDto = new Array(chatMessageDto);
            // this.loginservice.etudiant.prof.chatMessageDto.push(JSON.parse(event.data));
            // }
            // else { this.loginservice.etudiant.prof.chatMessageDto.push(JSON.parse(event.data));
            // }
            /*   this.loginservice.etudiant.prof.chatMessageDto.push(chatMessageDto);
               this.savechat(this.loginservice.etudiant.prof);
               this.findbynumero(this.loginservice.etudiant.prof.id);
               console.log(this.loginservice.etudiant.prof);
               console.log('ha lboita apres lemara' + this.loginservice.etudiant.prof.chatMessageDto); */
            // this.loginservice.etudiant.chatMessageDto
            // this.loginservice.etudiant.prof.chatMessageDto.push(chatMessageDto);
            //  this.students.forEach(item => {
            //    console.log(item);
            //    item.chatMessageDto.push(chatMessageDto);
            //    console.log(item.chatMessageDto);
            // });
            this.chatMessages.push(chatMessageDto);
        };
        this.webSocket.onclose = (event) => {
            console.log('Close: ', event);
        };
    }

    public savechat(prof: Prof) {
        this.serviceprof.savechatmsgs(prof).subscribe(
            data => {
                console.log('chat tsavat mn 3nd etud');
            }, error => {
                console.log('madaztch');
            }
        );
    }

    public findbynumero(num: number) {
        this.serviceprof.findbyid(num).subscribe(
            data => {
                // this.loginservice.etudiant.prof.chatMessageDto = data.chatMessageDto;
                this.loginservice.etudiant.prof = data;
            },
            error => {
                console.log('erreur achrif');
            }
        );
    }

    public sendMessage(chatMessageDto: ChatMessageDto) {
        this.webSocket.send(JSON.stringify(chatMessageDto));
    }

    public findstudentlist(idprof: number): Etudiant[] {
        this.serviceetudiant.findetudiantProf1(idprof).subscribe(
            data => {
                console.log(data);
                this.students = data;
                console.log('listetudiant ana kayn');
            }, error => {
                console.log('la fonction ne fonctionne pas');
            }
        );
        this.idprof = idprof;
        return this.students;
    }


    public closeWebSocket() {
        this.webSocket.close();
    }
}
