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
  comment: string;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private review: EtudiantReviewService, private serviceParcours: ParcoursService, private router: Router, private loginService: LoginService, private service: EtudiantReviewService, private serviceCours: ParcoursService) { }
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
  get selectedReview(): EtudiantReview {
    return this.review.selectedReview;
  }

  set selectedReview(value: EtudiantReview) {
    this.review.selectedReview = value;
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  public save(){
    console.log(this.comment);
    this.selected.comment = this.comment;
    this.selected.cours = this.selectedcours;
    this.selected.etudiant = this.loginService.etudiant;
    this.selected.dateReview = new Date();
    this.service.Save().subscribe(
        data => {
          this.serviceParcours.selectedEtudiantCours.etudiant.id = this.loginService.etudiant.id;
          this.serviceParcours.selectedEtudiantCours.cours.id = this.selectedcours.id;
          this.serviceParcours.saveEtudiantCours().subscribe(data => {
            // @ts-ignore
            this.serviceParcours.itemsEtudiantCours.push({...data});

          });
          this.viewDialog = false;
          document.getElementById('5').style.backgroundColor = 'white';
          document.getElementById('2').style.backgroundColor = 'white';
          document.getElementById('3').style.backgroundColor = 'white';
          document.getElementById('4').style.backgroundColor = 'white';
          document.getElementById('1').style.backgroundColor = 'white';
          this.review.findReview(this.selectedcours.id).subscribe(
              data => {
                this.selectedReview = data;
              });
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Course Finish',
            life: 3000,

          });
        });
  }

public emoji(review: number){
  console.log(review);
  this.selected.review = review;
  // tslint:disable-next-line:triple-equals
  if (review == 1){
  document.getElementById('1').style.backgroundColor = 'khaki';
  document.getElementById('2').style.backgroundColor = 'white';
  document.getElementById('3').style.backgroundColor = 'white';
  document.getElementById('4').style.backgroundColor = 'white';
  document.getElementById('5').style.backgroundColor = 'white';
  }else if (review == 2){
    document.getElementById('2').style.backgroundColor = 'khaki';
    document.getElementById('1').style.backgroundColor = 'white';
    document.getElementById('3').style.backgroundColor = 'white';
    document.getElementById('4').style.backgroundColor = 'white';
    document.getElementById('5').style.backgroundColor = 'white';
  }else if (review == 3){
    document.getElementById('3').style.backgroundColor = 'khaki';
    document.getElementById('2').style.backgroundColor = 'white';
    document.getElementById('1').style.backgroundColor = 'white';
    document.getElementById('4').style.backgroundColor = 'white';
    document.getElementById('5').style.backgroundColor = 'white';
  }else if (review == 4){
    document.getElementById('4').style.backgroundColor = 'khaki';
    document.getElementById('2').style.backgroundColor = 'white';
    document.getElementById('3').style.backgroundColor = 'white';
    document.getElementById('1').style.backgroundColor = 'white';
    document.getElementById('5').style.backgroundColor = 'white';
  }else if (review == 5){
    document.getElementById('5').style.backgroundColor = 'khaki';
    document.getElementById('2').style.backgroundColor = 'white';
    document.getElementById('3').style.backgroundColor = 'white';
    document.getElementById('4').style.backgroundColor = 'white';
    document.getElementById('1').style.backgroundColor = 'white';
  }
  }
}
