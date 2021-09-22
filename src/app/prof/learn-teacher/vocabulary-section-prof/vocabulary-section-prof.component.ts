import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SectionItemModel} from '../../../controller/model/section-item.model';
import {MessageService} from 'primeng/api';
import {SectionItemService} from '../../../controller/service/section-item.service';
import {Router} from '@angular/router';
import {VocabularySectionItemProfComponent} from './vocabulary-section-item-prof/vocabulary-section-item-prof.component';

@Component({
  selector: 'app-vocabulary-section-prof',
  templateUrl: './vocabulary-section-prof.component.html',
  styleUrls: ['./vocabulary-section-prof.component.scss']
})
export class VocabularySectionProfComponent implements OnInit {
  @ViewChild(VocabularySectionItemProfComponent) child: VocabularySectionItemProfComponent;

  @Output() someEvent = new EventEmitter<string>();

  listItems: SectionItemModel[];
  currentItem: SectionItemModel;
  showPrevious: boolean;
  showNext: boolean;
  showfinish: boolean;
  showEnd: boolean;
  showItems: boolean;
  currentIndex:number
  fliped: boolean;
  progressBarValue: number;


  constructor(private messageService: MessageService, private sectionItemService: SectionItemService, private router: Router) {
  }

  ngOnInit(): void {
    this.listItems = this.sectionItemService.sectionSelected.sectionItems;
    this.currentItem = this.listItems[0];
    this.currentIndex=this.listItems.indexOf(this.currentItem)+1;
    this.calculProgressBarValue(this.currentIndex)
    this.showNext = true;
    this.showPrevious = false;

    this.showItems = true;
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
      this.currentIndex=index+2
      this.calculProgressBarValue(this.currentIndex)
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



  endShow() {
    this.showItems = false;
    this.showEnd = true;
  }

  finish() {
    this.someEvent.next();
  }

  flip() {
    this.fliped=true
    this.child.showHidden()
    const index = this.listItems.indexOf(this.currentItem);
    if (index + 1 >= this.listItems.length) {
      this.showNext = false;
      this.showfinish = true;
    }
  }

  calculProgressBarValue(index: number) {
    const length=this.listItems.length
    this.progressBarValue=(index*100)/length
  }

}
