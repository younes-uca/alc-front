import {Component, OnInit} from '@angular/core';
import {SectionItemModel} from '../../../../controller/model/section-item.model';
import {Section} from '../../../../controller/model/section.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {TranslationFeaturesService} from '../../../../controller/service/translation-features.service';

@Component({
    selector: 'app-section-item',
    templateUrl: './section-item.component.html',
    styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

    sctionItem: SectionItemModel;
    sectionItemList: SectionItemModel[];
    updateTime: boolean = false;
    imageUrl: string;
    idsList: Array<number> = [];


    responsiveOptions;
    itemsLoaded: Promise<boolean>;

    constructor(private translationFeaturesService: TranslationFeaturesService, private sectionItemService: SectionItemService, private messageService: MessageService, private router: Router) {

    }

    get sectionSelected(): Section {
        return this.sectionItemService.sectionSelected;
    }

    set sectionSelected(value: Section) {
        this.sectionItemService.sectionSelected = value;
    }


    ngOnInit(): void {

        this.sctionItem = new SectionItemModel('assets/image5.png');
        this.sectionItemList = this.sectionItemService.sectionSelected.sectionItems;
        console.log(this.sctionItem.imageUrl);
    }

    openPreview() {

        if (this.sectionItemList.length === 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Wait',
                detail: 'You don\'t have any data to preview',
                life: 3000
            });
        } else {
            this.router.navigate(['/pages/preview-section-items']);
        }
    }

    save() {
        this.sectionItemService.createSectionItems().subscribe(data => {
            if (data === 1) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'SectionItem Created',
                    life: 3000
                });
                this.sectionItemService.deleteSectionItems(this.idsList).subscribe(date => {
                    if (data === 1) {
                        this.idsList = [];
                        this.sectionSelected = null;
                        this.router.navigate(['/pages/parcours']);
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'SectionItem Created',
                            life: 3000
                        });
                    }
                });


            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'SectionItem Created',
                    life: 3000
                });
            }
        }, error => {
            console.error(error);
        });
    }

    addFormule() {
        console.log('hannaaa=> ' + this.sectionSelected.sectionItems);
        this.sctionItem.response.toLowerCase();
        if (this.sectionSelected.sectionItems.includes(this.sctionItem)) {
            console.log('9DIIIIIIIIIIIIIM');
            const index = this.sectionSelected.sectionItems.indexOf(this.sctionItem);
            this.sectionSelected.sectionItems[index] = this.sctionItem;
        } else {
            this.sectionSelected.sectionItems.splice(0, 0, this.sctionItem);
            console.log('JDIIIIIIIIIIID===>' + this.sectionSelected.sectionItems.length);
        }
        this.sctionItem = new SectionItemModel('assets/image5.png');
        this.imageUrl = null;
        this.updateTime = false;
        //    this.sectionItemList = this.sectionSelected.sectionItems;
    }

    imagePreview() {
        window.open(this.sctionItem.imageUrl, '_blank');
    }

    convert() {
        if (this.imageUrl) {
            const found = this.imageUrl.match(/d\/([A-Za-z0-9\-\_]+)/);
            const srcImg = 'https://drive.google.com/uc?export=view&id=' + found[1];
            this.sctionItem.imageUrl = srcImg;
        }
    }

    update(node: any) {
        this.updateTime = true;
        this.sctionItem = node;
    }

    delete() {
        this.idsList.push(this.sctionItem.id);
        console.log(this.sctionItem);
        const index = this.sectionSelected.sectionItems.indexOf(this.sctionItem);
        console.log(index);
        this.sectionSelected.sectionItems.splice(index, 1);
        console.log(this.sectionSelected.sectionItems.length);
        console.log(this.idsList);
        this.updateTime = false;
        this.sctionItem = new SectionItemModel('assets/image5.png');
    }

    translate() {
        this.translationFeaturesService.getTranslationFeatures(this.sctionItem.response).subscribe(data => {

            this.sctionItem.translation = data.translation;
            this.sctionItem.example = data.example;
            this.sctionItem.explanation = data.explanation;
            this.sctionItem.synonyms = data.synonyms;
        });
    }

    trackByIdx(index: number, obj: any): any {
        return index;
    }
}
