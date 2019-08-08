import { Component, OnInit } from '@angular/core';
import { MiniHeaderService } from 'src/app/core/services/mini-header.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mini-header',
  templateUrl: './mini-header.component.html',
  styleUrls: ['./mini-header.component.scss']
})
export class MiniHeaderComponent implements OnInit {
  currentRouteUrl : string;
  constructor(public miniHeaderService : MiniHeaderService,private router : Router) { }

  ngOnInit() {
    this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => this.currentRouteUrl = this.router.url.split(/[?#]/)[0]);
    
  }

}
