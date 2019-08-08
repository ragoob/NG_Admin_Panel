import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BsmodalService {
  Show$ : BehaviorSubject<boolean> =  new BehaviorSubject(false);

  constructor() { }

  
  Open(){
    this.Show$.next(true);
     document.querySelector('body').classList.add('modal-open')
     var modalbackdrop = document.createElement('div');
     modalbackdrop.classList.add('modal-backdrop','fade','show');
     document.querySelector('body').appendChild(modalbackdrop);
  }
  
  Close(){
    this.Show$.next(false);
    document.querySelector('body').classList.remove('modal-open')
     document.querySelector('.modal-backdrop').remove();
  }


}
