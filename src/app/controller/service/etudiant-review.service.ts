import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantReview} from '../model/etudiant-review.model';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {ParcoursService} from './parcours.service';
import {ProfReview} from '../model/ProfReview.model';
import {Etudiant} from '../model/etudiant.model';
import {Parcours} from '../model/parcours.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantReviewService {

  constructor(private http: HttpClient, private user: LoginService,  private service: ParcoursService) { }
  private _viewDialog: boolean;
  private _viewDialogProf: boolean;
  private _selected: EtudiantReview;
  private _selectedReviewProf: ProfReview;
  private _selectedReview: EtudiantReview;
  private _selectedProfReview: ProfReview;
  private _students: Array<Etudiant>;


  get students(): Array<Etudiant> {
    if (this._students == null){
      this._students = new Array<Etudiant>();
    }
    return this._students;
  }

  set students(value: Array<Etudiant>) {
    this._students = value;
  }

  get viewDialogProf(): boolean {
    return this._viewDialogProf;
  }

  set viewDialogProf(value: boolean) {
    this._viewDialogProf = value;
  }

  get selectedReviewProf(): ProfReview {
    if (this._selectedReviewProf == null){
      this._selectedReviewProf = new ProfReview();
    }
    return this._selectedReviewProf;
  }

  set selectedReviewProf(value: ProfReview) {
    this._selectedReviewProf = value;
  }

  get selectedProfReview(): ProfReview {
    if (this._selectedProfReview == null){
      this._selectedProfReview = new ProfReview();
    }
    return this._selectedProfReview;
  }

  set selectedProfReview(value: ProfReview) {
    this._selectedProfReview = value;
  }

  get selectedReview(): EtudiantReview {
    if (this._selectedReview == null){
      this._selectedReview = new EtudiantReview();
    }
    return this._selectedReview;
  }

  set selectedReview(value: EtudiantReview) {
    this._selectedReview = value;
  }

  public Save(): Observable<EtudiantReview> {

    return this.http.post<EtudiantReview> ('http://localhost:8036/learn/etudiantReview/', this.selected);
  }
  public SaveReviewProf(): Observable<ProfReview> {

    return this.http.post<ProfReview> ('http://localhost:8036/learn/profReview/', this.selectedProfReview);
  }
  public findReview(id: number): Observable<EtudiantReview> {
    return this.http.get<EtudiantReview> ('http://localhost:8036/learn/etudiantReview/etudiant/id/' + this.user.etudiant.id + '/cours/id/' + this.service.selectedcours.id);
  }
  public findReviewProf(id: number): Observable<ProfReview> {
    return this.http.get<ProfReview> ('http://localhost:8036/learn/profReview/etudiant/id/' + this.selectedProfReview.etudiant.id + '/cours/id/' + this.service.selectedcours.id + '/prof/id/' + this.user.prof.id);
  }
  get selected(): EtudiantReview {
    if (this._selected == null){
      this._selected = new EtudiantReview();
    }
    return this._selected;
  }

  set selected(value: EtudiantReview) {
    this._selected = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }
  public getStudents(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/prof/id/' + this.user.prof.id);
  }
  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }
}
