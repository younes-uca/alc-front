import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtudiantReviewService} from '../../../../controller/service/etudiant-review.service';
import {EtudiantReview} from '../../../../controller/model/etudiant-review.model';
import {Cours} from '../../../../controller/model/cours.model';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {LoginService} from '../../../../controller/service/login.service';

@Component({
  selector: 'app-etudiant-review-view',
  templateUrl: './etudiant-review-view.component.html',
  styleUrls: ['./etudiant-review-view.component.scss']
})
export class EtudiantReviewViewComponent implements OnInit {

  constructor(private messageService: MessageService, private loginService: LoginService, private service: EtudiantReviewService, private serviceCours: ParcoursService) { }
  get selectedcours(): Cours {
    return this.serviceCours.selectedcours;
  }

  set selectedcours(value: Cours) {
    this.serviceCours.selectedcours = value;
  }

  ngOnInit(): void {
  }
  get selected(): EtudiantReview {
    return this.service.selected;
  }

  set selected(value: EtudiantReview) {
    this.service.selected = value;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }
public save(){
    this.selected.cours.id = this.selectedcours.id;
    this.selected.etudiant.id = this.loginService.etudiant.id;
}
}
