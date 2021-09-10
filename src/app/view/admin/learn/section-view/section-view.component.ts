import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Section} from '../../../../controller/model/section.model';

@Component({
    selector: 'app-section-view',
    templateUrl: './section-view.component.html',
    styleUrls: ['./section-view.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class SectionViewComponent implements OnInit {
// tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    get selectedsection(): Section {
        return this.service.selectedsection;
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    get viewDialogSection(): boolean {
        return this.service.viewDialogSection;
    }

    set viewDialogSection(value: boolean) {
        this.service.viewDialogSection = value;
    }

    ngOnInit(): void {
    }

    public hideViewDialog() {
        this.viewDialogSection = false;
    }
}
