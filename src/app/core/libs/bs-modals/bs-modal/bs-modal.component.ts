import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BsmodalService } from './bsmodal.service';

@Component({
  selector: 'bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.scss']
})
export class BsModalComponent implements OnInit {
@Input('closable') closable : boolean;
@Input('title') title : string;
  constructor(public bsmodalService : BsmodalService) { }

  ngOnInit() {
  }


}


