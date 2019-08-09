import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BsmodalService {
  private modals: any[] = [];

  constructor() { }
 
  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
}


open(id: string) {
    // open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.open();

    if(! document.querySelector('body').classList.contains('modal-open')){
      document.querySelector('body').classList.add('modal-open')
    }
    
    if(!document.querySelector('.modal-backdrop')){
      var modalbackdrop = document.createElement('div');
      modalbackdrop.classList.add('modal-backdrop','fade','show');
      document.querySelector('body').appendChild(modalbackdrop);
    }
   
}

close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
    console.log(this.modals.filter(x=> x.isOpened == true).length)
    if(this.modals.filter(x=> x.isOpened == true).length == 0)
   {
    document.querySelector('body').classList.remove('modal-open')
    document.querySelector('.modal-backdrop').remove();
   }

}


}
