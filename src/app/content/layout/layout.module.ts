import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { UserProfileComponent } from './header/topbar/user-profile/user-profile.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { NotificationComponent } from './header/topbar/notification/notification.component';
import { LanguageSwitcherComponent } from './header/topbar/language-switcher/language-switcher.component';
import { SideMenuComponent } from './aside/side-menu/side-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { MiniHeaderComponent } from './mini-header/mini-header.component';
import { RouterModule } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuConfigService } from 'src/app/core/services/menu-config.service';
import { PageConfigService } from 'src/app/core/services/page-config.service';
import { MiniHeaderService } from 'src/app/core/services/mini-header.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
       HeaderComponent,
       FooterComponent,
       TopbarComponent,
       UserProfileComponent,
       HeaderSearchComponent,
       NotificationComponent,
       LanguageSwitcherComponent,
       SideMenuComponent,
       MiniHeaderComponent,
       

  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule,
    HttpClientModule
   
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    UserProfileComponent,
    HeaderSearchComponent,
    NotificationComponent,
    LanguageSwitcherComponent,
    SideMenuComponent,
    TranslateModule,
    MiniHeaderComponent,

    
  ],
  providers: [MenuService,MenuConfigService,PageConfigService,MiniHeaderService]
})
export class LayoutModule { }
