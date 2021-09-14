import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantReview} from '../model/etudiant-review.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantReviewService {

  constructor(private http: HttpClient) { }
  private _viewDialog: boolean;
  private _selected: EtudiantReview;


  get selected(): EtudiantReview {
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
