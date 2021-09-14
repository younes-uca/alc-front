import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SectionItemModel} from '../../../../controller/model/section-item.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';
import {ImageItemComponent} from './image-item/image-item.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-section-item-preview',
    templateUrl: './section-item-preview.component.html',
    styleUrls: ['./section-item-preview.component.scss']
})
export class SectionItemPreviewComponent implements OnInit {
    @ViewChild(ImageItemComponent) child: ImageItemComponent;

    listItems: SectionItemModel[];
    currentItem: SectionItemModel;
    showPrevious: boolean;
    showNext: boolean;
    showfinish: boolean;
    showStart: boolean;
    showEnd: boolean;
    showItems: boolean;
    currentIndex:number
    fliped: boolean;


    constructor(private messageService: MessageService, private sectionItemService: SectionItemService, private router: Router) {
    }

    ngOnInit(): void {
        this.listItems = this.sectionItemService.sectionSelected.sectionItems;
        this.currentItem = this.listItems[0];
        this.currentIndex=this.listItems.indexOf(this.currentItem);
        this.showNext = true;
        this.showPrevious = false;
        this.showStart = true;
        this.showItems = false;
        this.showEnd = false;
        this.fliped=false
    }


    previousItem() {
        const index = this.listItems.indexOf(this.currentItem);
        if (index > 0) {
            if (index - 1 >= 0) {
                this.showNext = true;
                this.currentItem = this.listItems[index - 1];
                this.child.reloadComponent();
                this.showPrevious = true;
                this.showfinish = false;
            }
            if (index - 1 === 0) {
                this.showPrevious = false;
            }
        }
    }

    nextItem() {
        const index = this.listItems.indexOf(this.currentItem);
        if ( index < this.listItems.length - 1) {
            this.child.reloadComponent();
            this.currentItem = this.listItems[index + 1];
            this.showNext = true;
            this.showfinish = false;
            this.fliped=false
            this.child.fliped=false
            console.log('Hada howa index' + index + 1);

        }
        if (index + 1 >= this.listItems.length) {
            this.showNext = false;
            this.showfinish = true;
        }
    }

    startItem() {
        this.showItems = true;
        this.showStart = false;
        this.showEnd = false;
    }

    endShow() {
        this.showItems = false;
        this.showStart = false;
        this.showEnd = true;
    }

    finish() {
        this.router.navigate(['/pages/create-section-items']);
    }

    flip() {
        this.fliped=true
        this.child.fliped=true
        const index = this.listItems.indexOf(this.currentItem);
        if (index + 1 >= this.listItems.length) {
            this.showNext = false;
            this.showfinish = true;
        }
    }
}
