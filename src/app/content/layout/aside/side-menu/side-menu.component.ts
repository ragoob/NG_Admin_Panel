import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  currentRouteUrl : string;
  constructor(	public menuAsideService: MenuService,private router : Router) { }

  isMenuItemIsActive(item): boolean {
		if (item.submenu) {
			return this.isMenuRootItemIsActive(item);
		}

		if (!item.page) {
			return false;
		}

		// dashboard
		if (item.page !== '/' && this.currentRouteUrl.startsWith(item.page)) {
			return true;
		}
		return this.currentRouteUrl === item.page;
  }

  isMenuRootItemIsActive(item): boolean {
		let result: boolean = false;

		for (const subItem of item.submenu) {
			result = this.isMenuItemIsActive(subItem);
			if (result) {
				return true;
			}
		}

		return false;
	}
  
  expand(event: Event){
	var target = (event.target || event.srcElement || event.currentTarget) as Element;
	let el : Element  ;
	switch(target.tagName){
		case 'li' : 
		el = target;
		break;
		default : 
		el = target.closest('li');
		break;

	}
    if(el.classList.contains('with-sub')){
      if(el.classList.contains('active')){
        el.classList.remove('active')
      }
  
      else{
        el.classList.add('active')
      }
    }
    
  }
  ngOnInit() {
    this.currentRouteUrl = this.router.url.split(/[?#]/)[0];

		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => this.currentRouteUrl = this.router.url.split(/[?#]/)[0]);
  }

} 
