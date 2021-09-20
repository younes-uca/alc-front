import {Component, OnInit} from '@angular/core';
import {News} from '../../../controller/model/news.model';
import {NewsService} from '../../../controller/service/news.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-news-admin-edit',
    templateUrl: './news-admin-edit.component.html',
    styleUrls: ['./news-admin-edit.component.scss']
})
export class NewsAdminEditComponent implements OnInit {

    destinataire: any[];
    des: string;

    constructor(private service: NewsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _ref: string;

    get ref(): string {
        return this._ref;
    }

    set ref(value: string) {
        this._ref = value;
    }

    private _date: Date;

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    private _image: string;

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get selectes(): Array<News> {
        return this.service.selectes;
    }

    set selectes(value: Array<News>) {
        this.service.selectes = value;
    }

    get createDialogNews(): boolean {
        return this.service.createDialogNews;
    }

    set createDialogNews(value: boolean) {
        this.service.createDialogNews = value;
    }

    get editDialogNews(): boolean {
        return this.service.editDialogNews;
    }

    set editDialogNews(value: boolean) {
        this.service.editDialogNews = value;
    }

    get submittedNews(): boolean {
        return this.service.submittedNews;
    }

    set submittedNews(value: boolean) {
        this.service.submittedNews = value;
    }

    get items(): Array<News> {
        return this.service.items;
    }

    set items(value: Array<News>) {
        this.service.items = value;
    }

    get selected(): News {
        return this.service.selected;
    }

    set selected(value: News) {
        this.service.selected = value;
    }

    get viewDialogNews(): boolean {
        return this.service.viewDialogNews;
    }

    set viewDialogNews(value: boolean) {
        this.service.viewDialogNews = value;
    }

    public openCreate() {
        this.selected = new News();
        this.submittedNews = false;
        this.createDialogNews = true;
    }

    public hideCreateDialog() {
        this.createDialogNews = false;
        this.submittedNews = false;
    }

    public hideEditDialog() {
        this.editDialogNews = false;
        this.submittedNews = false;
    }

    public save() {
        for (let j = 0; j < this.destinataire.length; j++) {
            if (this.des == this.destinataire[j]) {
                this.selected.destinataire = this.destinataire[j].label;
            }
        }
        this.submittedNews = true;
        this.service.edit().subscribe(data => {
            // tslint:disable-next-line:no-shadowed-variable
            this.service.findAll().subscribe(data => this.items = data);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'News Created',
                life: 3000
            });
        });
        this.editDialogNews = false;
        this.selected = new News();
    }

    ngOnInit(): void {
        this.destinataire = [
            {label: 'teacher'},
            {label: 'student'},
        ];
    }


}
