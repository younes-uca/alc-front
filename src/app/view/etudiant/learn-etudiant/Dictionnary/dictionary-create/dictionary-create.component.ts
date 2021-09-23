import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../../../../../controller/model/dictionary.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../../../controller/service/login.service';
import {DictionaryService} from '../../../../../controller/service/dictionary.service';

@Component({
    selector: 'app-dictionary-create',
    templateUrl: './dictionary-create.component.html',
    styleUrls: ['./dictionary-create.component.scss']
})
export class DictionaryCreateComponent implements OnInit {
    constructor(private messageService: MessageService,
                private serviceUser: LoginService,
                private confirmationService: ConfirmationService, private dictionnaryService: DictionaryService) {
    }
    get selectedNow(): Dictionary {
        return this.dictionnaryService.selectedNow;
    }

    set selectedNow(value: Dictionary) {
        this.dictionnaryService.selectedNow = value;
    }

    get selected(): Dictionary {
        return this.dictionnaryService.selected;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selected(value: Dictionary) {
        this.dictionnaryService.selected = value;
    }

    get submittedDict(): boolean {
        return this.dictionnaryService.submittedDict;
    }

    set submittedDict(value: boolean) {
        this.dictionnaryService.submittedDict = value;
    }

    get createDialogDict(): boolean {
        return this.dictionnaryService.createDialogDict;
    }

    set createDialogDict(value: boolean) {
        this.dictionnaryService.createDialogDict = value;
    }

    get items(): Array<Dictionary> {
        return this.dictionnaryService.items;
    }

    set items(value: Array<Dictionary>) {
        this.dictionnaryService.items = value;
    }

    get editDialog(): boolean {
        return this.dictionnaryService.editDialog;
    }

    set editDialog(value: boolean) {
        this.dictionnaryService.editDialog = value;
    }

    get submitted(): boolean {
        return this.dictionnaryService.submitted;
    }

    set submitted(value: boolean) {
        this.dictionnaryService.submitted = value;
    }

    get itemsDict(): Array<Dictionary> {
        return this.dictionnaryService.itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this.dictionnaryService.itemsDict = value;
    }

    public hideCreateDialog() {
        this.selectedNow = new Dictionary();
        this.selected = new Dictionary();
        this.createDialogDict = false;
        this.submittedDict = false;
    }

    public save() {
        this.selected = this.selectedNow;
        this.selected.etudiant = this.serviceUser.etudiant;
        this.dictionnaryService.save().subscribe(data => {
            this.dictionnaryService.FindAllWord().subscribe(
                data => {
                    console.log("haddiii dataa==> "+data);
                    this.itemsDict = data;
                });

            // @ts-ignore
            this.itemsDict.push({...data});
            console.log(this.selected);
            console.log('meryem');
            this.selected.etudiant.id = this.serviceUser.etudiant.id;
            this.selected = new Dictionary();
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Word Added',
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

        this.selectedNow = new Dictionary();
        this.selected = new Dictionary();
        this.createDialogDict = false;
    }


    ngOnInit(): void {
        this.selectedNow = new Dictionary();
    }


}
