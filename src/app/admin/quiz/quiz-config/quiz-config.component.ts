import {Component, OnInit} from '@angular/core';
import {QuizConfig} from '../../../controller/model/quiz-config.model';
import {MessageService} from 'primeng/api';
import {QuizService} from '../../../controller/service/quiz.service';


@Component({
    selector: 'app-quiz-config',
    templateUrl: './quiz-config.component.html',
    styleUrls: ['./quiz-config.component.scss']
})
export class QuizConfigComponent implements OnInit {
    qst: boolean;
    rep: boolean;
    back: boolean;

    constructor(private service: QuizService, private messageService: MessageService) {
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get configuration(): QuizConfig {
        return this.service.configuration;
    }

    set configuration(value: QuizConfig) {
        this.service.configuration = value;
    }

    get configurations(): Array<QuizConfig> {
        return this.service.configurations;
    }

    set configurations(value: Array<QuizConfig>) {
        this.service.configurations = value;
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
    }

    public itemChecked(event: any) {
        if (event.target.checked == true) {
            this.configuration.shuffleOptions = true;
        }
    }

    saveConfig() {
        this.service.saveConfig().subscribe(
            data => {
                if (this.qst == true) {
                    this.configuration.shuffleQuestions = true;
                }
                if (this.rep == true) {
                    this.configuration.shuffleOptions = true;
                }
                if (this.back == true) {
                    this.configuration.allowBack = true;
                }
                this.configurations.push({...data});
            }
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Configuration Applieded',
            life: 3000
        });
        this.createDialog = false;
    }

    ProgressBar($event: any) {
        return this.service.ProgressBar(event);
    }


    checkCheckBoxvalue(event) {
        console.log(event.target.checked);
    }
}
