import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';

export class CalendrierProf {
    public id: number;
    public ref: string;
    public color: string;
    public startTime: string;
    public endTime: string;
    public startRecur: Date = new Date();
    public endRecur: Date = new Date();
    public daysOfWeek = [];
    public etudiant = new Etudiant();
    public prof = new Prof();
    // public prof = new prof();

}
