import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalComponent } from './bs-modal/bs-modal.component';



@NgModule({
  declarations: [BsModalComponent],
  imports: [
    CommonModule
  ]
  ,exports: [BsModalComponent]
})
export class BsModalsModule { }
