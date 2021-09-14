import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtudiantReviewService} from '../../../../controller/service/etudiant-review.service';
import {EtudiantReview} from '../../../../controller/model/etudiant-review.model';

@Component({
  selector: 'app-etudiant-review-view',
  templateUrl: './etudiant-review-view.component.html',
  styleUrls: ['./etudiant-review-view.component.scss']
})
export class EtudiantReviewViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtudiantReviewService) { }

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

}
