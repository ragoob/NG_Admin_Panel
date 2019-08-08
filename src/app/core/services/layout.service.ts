import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  switchToRtl(){
    document.querySelector('html').classList.remove('ltr')
    document.querySelector('html').classList.add('rtl');
    document.querySelector('html').setAttribute('lang','ar')
   }

   switchToLtr(){
    document.querySelector('html').classList.remove('rtl')
    document.querySelector('html').classList.add('ltr');
    document.querySelector('html').setAttribute('lang','en')
   }

   toggleMenu(){
     if(document.querySelector('body').classList.length == 0 )
       document.querySelector('body').classList.add('hide-nav-menu');
     else
     document.querySelector('body').classList.remove('hide-nav-menu');
   }
   
}
