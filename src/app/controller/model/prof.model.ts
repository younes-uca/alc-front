import {RecommendTeacher} from './recommend-teacher.model';
import {CategorieProf} from './categorie-prof.model';
import {ClassRoom} from './class-room.model';
import {Etudiant} from './etudiant.model';
import {ChatMessageDto} from './chatMessageDto';

export class Prof {
    public id: number;
    public numero: string;
    public nom: string;
    public image: string;
    public prenom: string;
    public login: string;
    public password: string;
    public addresse: string;
    public email: string;
    public ref: string;
    public classRoomList = new Array<ClassRoom>();
    public categorieProf = new CategorieProf();
    public recommendList = new Array<RecommendTeacher>();
    public chatMessageDto = new Array<ChatMessageDto>();
    public students = new Array<Etudiant>();
}
