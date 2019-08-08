import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuConfigService } from './menu-config.service';
import * as objectPath from 'object-path';

@Injectable()
export class MenuService {
  menuList$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(
    private menuConfigService: MenuConfigService
  ) {

    this.menuConfigService.onMenuUpdated$.subscribe(model => {
			setTimeout(() =>
				this.menuList$.next(objectPath.get(model.config, 'aside.items'))
			);
		});
   }
}
