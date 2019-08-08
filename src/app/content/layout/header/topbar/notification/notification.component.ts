import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  toggled : boolean = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)){
      this.toggled = false;
    }
    else{
      this.toggled = true;
    }
  
  }
  
  constructor(private eRef : ElementRef) { }
 
  ngOnInit() {
  }

}
