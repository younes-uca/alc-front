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
import {ProfReview} from '../../../../controller/model/ProfReview.model';

@Component({
  selector: 'app-prof-review-view',
  templateUrl: './prof-review-view.component.html',
  styleUrls: ['./prof-review-view.component.scss']
})
export class ProfReviewViewComponent implements OnInit {
  comment: string;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private review: EtudiantReviewService, private serviceParcours: ParcoursService, private router: Router, private loginService: LoginService, private service: EtudiantReviewService, private serviceCours: ParcoursService) { }
  get selectedcours(): Cours {
    return this.serviceCours.selectedcours;
  }

  set selectedcours(value: Cours) {
    this.serviceCours.selectedcours = value;
  }

  public findAllStudent(){
    this.review.getStudents().subscribe(data => this.students = data);
  }
  ngOnInit(): void {
    this.review.getStudents().subscribe(data => this.students = data);
  }
  get viewDialogProf(): boolean {
    return this.service.viewDialogProf;
  }

  set viewDialogProf(value: boolean) {
    this.service.viewDialogProf = value;
  }
  get selectedProfReview(): ProfReview {
    return this.review.selectedProfReview;
  }

  set selectedProfReview(value: ProfReview) {
    this.review.selectedProfReview = value;
  }
  get students(): Array<Etudiant> {
    return this.review.students;
  }

  set students(value: Array<Etudiant>) {
    this.review.students = value;
  }
  public hideViewDialog() {
    this.viewDialogProf = false;
  }
  public save(){
    this.selectedProfReview.cours = this.selectedcours;
    this.selectedProfReview.prof = this.loginService.prof;
    this.selectedProfReview.dateReview = new Date();
    this.service.SaveReviewProf().subscribe(
        data => {
          this.viewDialogProf = false;
          this.selectedProfReview = new ProfReview();
          document.getElementById('5').style.backgroundColor = 'white';
          document.getElementById('2').style.backgroundColor = 'white';
          document.getElementById('3').style.backgroundColor = 'white';
          document.getElementById('4').style.backgroundColor = 'white';
          document.getElementById('1').style.backgroundColor = 'white';
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Review added',
            life: 3000,

          });
        }, error => {
          this.selectedProfReview = new ProfReview();
          this.messageService.add({
            severity: 'error',
            summary: 'Warning',
            detail: 'Review canceled',
            life: 3000
          });
        });
    this.selectedProfReview = new ProfReview();
  }

public emoji(review: number){
  console.log(review);
  this.selectedProfReview.review = review;
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
