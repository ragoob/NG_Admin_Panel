import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslationService } from './core/services/translation.service';
import { locale as enLang } from './config/i18n/en';
import { locale as arLang } from './config/i18n/ar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit,OnInit {
  constructor(	private translationService: TranslationService){
    // register translations
		this.translationService.loadTranslations(enLang, arLang);

	
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  setTimeout(() => {
    this.Loading = false;
  }, 1000);
  }
  Loading : boolean = true;
  title = 'technoapp';
}
