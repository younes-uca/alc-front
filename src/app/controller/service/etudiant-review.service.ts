import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantReview} from '../model/etudiant-review.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantReviewService {

  constructor(private http: HttpClient) { }
  private _viewDialog: boolean;
  private _selected: EtudiantReview;
  public Save(): Observable<EtudiantReview> {
    return this.http.post<EtudiantReview> ('http://localhost:8036/learn/etudiantReview/', this.selected);
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
