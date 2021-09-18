import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantReview} from '../model/etudiant-review.model';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {ParcoursService} from './parcours.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantReviewService {

  constructor(private http: HttpClient, private user: LoginService,  private service: ParcoursService) { }
  private _viewDialog: boolean;
  private _selected: EtudiantReview;
  private _selectedReview: EtudiantReview;


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
  public findReview(id: number): Observable<EtudiantReview> {
    return this.http.get<EtudiantReview> ('http://localhost:8036/learn/etudiantReview/etudiant/id/' + this.user.etudiant.id + '/cours/id/' + this.service.selectedcours.id);
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

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }
}
