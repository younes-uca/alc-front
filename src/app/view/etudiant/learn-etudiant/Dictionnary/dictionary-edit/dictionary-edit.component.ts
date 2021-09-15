import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../../../../controller/service/dictionary.service';
import {Dictionary} from '../../../../../controller/model/dictionary.model';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-dictionary-edit',
    templateUrl: './dictionary-edit.component.html',
    styleUrls: ['./dictionary-edit.component.scss']
})
export class DictionaryEditComponent implements OnInit {

    constructor(private dictionnaryService: DictionaryService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    }

    get selected(): Dictionary {
        return this.dictionnaryService.selected;
    }

    set selected(value: Dictionary) {
        this.dictionnaryService.selected = value;
    }

    get itemsDict(): Array<Dictionary> {
        return this.dictionnaryService.itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this.dictionnaryService.itemsDict = value;
    }

    get submittedDictEdit(): boolean {
        return this.dictionnaryService.submittedDictEdit;
    }

    set submittedDictEdit(value: boolean) {
        this.dictionnaryService.submittedDictEdit = value;
    }

    get editDialogDict(): boolean {
        return this.dictionnaryService.editDialogDict;
    }

    set editDialogDict(value: boolean) {
        this.dictionnaryService.editDialogDict = value;
    }

    public edit() {
        this.dictionnaryService.editDict().subscribe(data => {
            console.log(this.selected);
            this.selected = new Dictionary();
            this.dictionnaryService.FindAllWord().subscribe(
                data => {
                    this.itemsDict = data;
                });

            // @ts-ignore
            this.itemsDict.push({...data});
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Word Edited',
                life: 3000
            });
        }, error => {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Error',
                life: 3000
            });
        });
        this.selected = new Dictionary();
        this.editDialogDict = false;
    }

    public hideEditDialog() {
        this.editDialogDict = false;
        this.submittedDictEdit = false;
    }

    public delete(word: string) {
        this.dictionnaryService.deleteWord(word).subscribe(data => {
            this.dictionnaryService.FindAllWord().subscribe(
                data => {
                    this.itemsDict = data;
                });
            this.selected = new Dictionary();
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Word Deleted',
                life: 3000
            });
        });
        this.editDialogDict = false;
    }

    ngOnInit(): void {
    }

}
