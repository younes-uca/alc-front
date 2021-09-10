export class QuizConfig {
    public id: number;
    public shuffleQuestions: boolean;
    public allowBack: boolean;
    public pageSize: number;
    public duration: number;
    public shuffleOptions: boolean;
    public ref: string;


    /*constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.shuffleOptions = data.shuffleOptions;
        this.allowBack = data.allowBack;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.shuffleQuestions = data.shuffleQuestions;
        this.showClock = data.showClock;
    }*/
}
