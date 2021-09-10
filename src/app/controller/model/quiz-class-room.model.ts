import {ClassRoom} from './class-room.model';
import {Quiz} from './quiz.model';

export class QuizClassRoom {
    public id: string;
    public classRoom = new ClassRoom();
    public quiz = new Quiz();
}
