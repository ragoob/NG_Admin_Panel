import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AuthService } from 'src/app/core/services/AuthService';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
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
  constructor(private eRef: ElementRef,public Auth : AuthService) { }

  ngOnInit() {
  
  }



}
