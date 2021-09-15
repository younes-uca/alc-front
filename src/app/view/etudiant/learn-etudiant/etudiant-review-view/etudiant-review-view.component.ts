import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtudiantReviewService} from '../../../../controller/service/etudiant-review.service';
import {EtudiantReview} from '../../../../controller/model/etudiant-review.model';
import {Cours} from '../../../../controller/model/cours.model';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {LoginService} from '../../../../controller/service/login.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Etudiant} from '../../../../controller/model/etudiant.model';

@Component({
  selector: 'app-etudiant-review-view',
  templateUrl: './etudiant-review-view.component.html',
  styleUrls: ['./etudiant-review-view.component.scss']
})
export class EtudiantReviewViewComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private router: Router, private loginService: LoginService, private service: EtudiantReviewService, private serviceCours: ParcoursService) { }
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
public save(review: number){
  console.log(review);
  this.selected.review = review;
  this.selected.cours = this.selectedcours;
  this.selected.etudiant = this.loginService.etudiant;
  this.service.Save().subscribe(
        data => {
          this.viewDialog = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Course Finish',
            life: 3000,

          });
        });
  }
}
