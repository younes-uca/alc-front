import {Component, OnInit} from '@angular/core';
import {News} from '../../../../controller/model/news.model';
import {NewsService} from '../../../../controller/service/news.service';

@Component({
    selector: 'app-news-teacher-list',
    templateUrl: './news-teacher-list.component.html',
    styleUrls: ['./news-teacher-list.component.scss']
})
export class NewsTeacherListComponent implements OnInit {

    constructor(private service: NewsService) {
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

    public view(newss: News) {
        this.selected = {...newss};
        this.viewDialogNews = true;
    }

    public findByRef() {
        this.service.findByRef().subscribe(data => {
            this.selected = data;
        });
    }

    ngOnInit(): void {
        //this.initCol();
        this.service.findNews('teacher').subscribe(data => {
            this.items = data;
        }, error => console.log('erreur'));
    }

}
