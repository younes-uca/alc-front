export class ChatMessageDto {
    user: string;
    message: string;
    student: boolean;

    constructor(user: string, message: string, student: boolean) {
        this.user = user;
        this.message = message;
        this.student = student;
    }
}
