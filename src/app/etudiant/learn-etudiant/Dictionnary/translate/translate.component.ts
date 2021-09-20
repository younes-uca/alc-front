import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../../controller/service/login.service';
import {DictionaryService} from '../../../../controller/service/dictionary.service';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {DictionaryCreateComponent} from '../dictionary-create/dictionary-create.component';
import {$} from 'protractor';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  word = '';
  wordDict: any;
  j: number;
  constructor(private messageService: MessageService,
              private serviceUser: LoginService,
              private confirmationService: ConfirmationService, private dictionnaryService: DictionaryService) {
  }
  get listSynonymes(): Array<any> {
    return this.dictionnaryService.listSynonymes;
  }

  set listSynonymes(value: Array<any>) {
    this.dictionnaryService.listSynonymes = value;
  }
  get Synonymes(): Array<any> {
    return this.dictionnaryService.Synonymes;
  }

  set Synonymes(value: Array<any>) {
    this.dictionnaryService.Synonymes = value;
  }
  public hideTranslateDialog() {
    this.TranslateSynonymeDialog = false;
    this.submittedDict = false;
  }
  public sound(word: string) {
    const text = encodeURIComponent(word);
    console.log(text);
    const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
    const audio = new Audio(url);
    audio.play();
  }
  ngOnInit(): void {
  }
  get selected(): Dictionary {
    return this.dictionnaryService.selected;
  }
public trans(){
  this.selectedNow.definition = this.word;
  this.selectedNow.word = this.selected.word;
  this.word = '';
  this.hideTranslateDialog();
  this.createDialogDict = true;
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

  get submitted(): boolean {
    return this.dictionnaryService.submitted;
  }

  set submitted(value: boolean) {
    this.dictionnaryService.submitted = value;
  }
  get TranslateSynonymeDialog(): boolean {
    return this.dictionnaryService.TranslateSynonymeDialog;
  }

  set TranslateSynonymeDialog(value: boolean) {
    this.dictionnaryService.TranslateSynonymeDialog = value;
  }
  get selectedNow(): Dictionary {
    return this.dictionnaryService.selectedNow;
  }

  set selectedNow(value: Dictionary) {
    this.dictionnaryService.selectedNow = value;
  }
  public create(translation){
    this.selectedNow.definition = translation;
    this.selectedNow.word = this.selected.word;
    this.hideTranslateDialog();
    this.createDialogDict = true;
  }

}
