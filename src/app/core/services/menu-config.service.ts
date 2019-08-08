import { Injectable } from '@angular/core';
import { MenuConfig } from 'src/app/config/menuConfig';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class MenuConfigService {
	public configModel: MenuConfig = new MenuConfig();
	public onMenuUpdated$: BehaviorSubject<MenuConfig> = new BehaviorSubject(
		this.configModel
	);
	menuHasChanged: any = false;

	constructor(private router: Router) {
		this.router.events
			.pipe(filter(event => event instanceof NavigationStart))
			.subscribe(event => {
				console.log('menu updated');
				if (this.menuHasChanged) {
					console.log('menu changed');
					this.resetModel();
				}
			});
	}

	setModel(menuModel: MenuConfig) {
		this.configModel = Object.assign(this.configModel, menuModel);
		this.onMenuUpdated$.next(this.configModel);
		this.menuHasChanged = true;
	}

	resetModel() {
		this.configModel = new MenuConfig();
		this.onMenuUpdated$.next(this.configModel);
		this.menuHasChanged = false;
	}
 
}
