import {Component, OnInit} from '@angular/core';
import {SectionItemModel} from '../../../../../controller/model/section-item.model';
import {SectionItemService} from '../../../../../controller/service/section-item.service';
import {Section} from '../../../../../controller/model/section.model';

@Component({
    selector: 'app-section-item-list',
    templateUrl: './section-item-list.component.html',
    styleUrls: ['./section-item-list.component.scss']
})
export class SectionItemListComponent implements OnInit {

    sectionItemList: SectionItemModel[];
    responsiveOptions;

    constructor(private sectionItemService: SectionItemService) {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    get sectionSelected(): Section {
        return this.sectionItemService.sectionSelected;
    }

    set sectionSelected(value: Section) {
        this.sectionItemService.sectionSelected = value;
    }

    get sectionItem(): SectionItemModel {
        return this.sectionItemService.sectionItem;
    }

    set sectionItem(value: SectionItemModel) {
        this.sectionItemService.sectionItem = value;
    }

    ngOnInit(): void {
        this.sectionItemList = this.sectionSelected.sectionItems;
        console.log('Hadi hyaa dyal comList==>' + this.sectionItemList);
        console.log('Reloaded');
    }

    update(node: any) {
        this.sectionItem = node;
    }

    /* delete(node: any) {
       this.idsList.push(node.id);
       console.log(node);
       const index=this.sectionSelected.sectionItems.indexOf(node)
       console.log(index);
       this.sectionSelected.sectionItems.splice(index,1)
       console.log(this.sectionSelected.sectionItems.length);
       console.log(this.idsList)
     }*/

}
