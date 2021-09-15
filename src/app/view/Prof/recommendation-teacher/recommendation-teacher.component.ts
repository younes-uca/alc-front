import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {RecommendTeacher} from '../../../controller/model/recommend-teacher.model';

@Component({
  selector: 'app-recommendation-teacher',
  templateUrl: './recommendation-teacher.component.html',
  styleUrls: ['./recommendation-teacher.component.scss']
})
export class RecommendationTeacherComponent implements OnInit {

  constructor(private messageService: MessageService,
              private serviceUser: LoginService,
              private confirmationService: ConfirmationService, private service: RecommendTeacherService) { }

  ngOnInit(): void {
    console.log(this.selected);

  }
  get items(): Array<RecommendTeacher> {
    return this.service.items;
  }

  set items(value: Array<RecommendTeacher>) {
    this.service.items = value;
  }

  get selected(): RecommendTeacher {
    return this.service.selected;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set selected(value: RecommendTeacher) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }


  public save() {
    this.selected.prof = this.serviceUser.prof;
    this.service.save().subscribe(data => {
      // @ts-ignore
      this.items.push({...data});
      console.log(this.selected);
      console.log('meryem');
      this.selected.prof.id = this.serviceUser.prof.id;
      this.selected = new RecommendTeacher();

    });

    this.selected == null;
    this.editDialog = false;
  }
}



