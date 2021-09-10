import {ClassRoom} from './class-room.model';
import {Etudiant} from './etudiant.model';

export class EtudiantClassRoom {
    public id: string;
    public classRoom = new ClassRoom();
    public etudiant = new Etudiant();
}
