export class CalendrierVo {
    public id: number;
    public ref: string;
    public title: string;
    public titleProf: string;
    public color: string;
    public startTime: string;
    public endTime: string;
    public startRecur: Date = new Date();
    public endRecur: Date = new Date();
    public daysOfWeek = [];
}
