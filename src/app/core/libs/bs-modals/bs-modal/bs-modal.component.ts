import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
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
@Input('id') id : string;
isOpened : boolean;
@Input('addtionalClass') addtionalClass : string;
  constructor(public bsmodalService : BsmodalService,private el: ElementRef,   private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.id) {
     throw('modal must have id')
  }
   this.bsmodalService.add(this);
   
  }

  open(){

    (this.el.nativeElement as Element).children[0].classList.toggle('show');
    this.renderer.setStyle((this.el.nativeElement as Element).children[0], 'display', 'block');
    this.isOpened = true;
   
  }

  close(){
    (this.el.nativeElement as Element).children[0].classList.toggle('show');
    this.renderer.setStyle((this.el.nativeElement as Element).children[0], 'display', 'none');
    this.isOpened = false;
    
  }

}


