import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../../controller/service/news.service';
import {News} from '../../../../controller/model/news.model';

@Component({
    selector: 'app-news-etudiant-view',
    templateUrl: './news-etudiant-view.component.html',
    styleUrls: ['./news-etudiant-view.component.scss']
})
export class NewsEtudiantViewComponent implements OnInit {

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

    public hideViewDialog() {
        this.viewDialogNews = false;
    }

    public findByRef() {
        this.service.findByRef().subscribe(data => {
            this.selected = data;
        });
    }

    ngOnInit(): void {
    }

}
