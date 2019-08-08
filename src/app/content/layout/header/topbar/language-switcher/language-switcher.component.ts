import { Component, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LayoutService } from 'src/app/core/services/layout.service';

interface LanguageFlag {
	lang: string;
	country: string;
	flag: string;
  active?: boolean;
  seocode ? : string;
  rtl ? : boolean
}

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  toggled : boolean;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)){
      this.toggled = false;
    }
    else{
      this.toggled = true;
    }
  
  }
  constructor(	private translationService: TranslationService,
		private router: Router,
    private el: ElementRef,
    private layout : LayoutService
    
    ) { }
    language: LanguageFlag;
    languages: LanguageFlag[] = [
      {
        lang: 'en',
        country: 'USA',
        flag: 'assets/img/flags/en.svg',
        seocode : 'en',
        rtl : false
      },
      {
        lang: 'ar',
        country: 'KSA',
        flag: 'assets/img/flags/ar.svg',
        seocode : 'ar',
        rtl : true
    
      },

    ]
  ngOnInit() {
    this.setSelectedLanguage();
		this.router.events
			.pipe(filter(event => event instanceof NavigationStart))
			.subscribe(event => {
        this.setSelectedLanguage();
			});
  }

  setLanguage(lang) {
		this.languages.forEach((language: LanguageFlag) => {
			if (language.lang === lang) {
				language.active = true;
				this.language = language;
			} else {
				language.active = false;
			}
		});
    this.translationService.setLanguage(lang);

   let _lang =  this.languages.find(l=> l.active == true)
   if(_lang.rtl)
   this.layout.switchToRtl();
   else
   this.layout.switchToLtr();
   
    
	}

	setSelectedLanguage(): any {

		this.translationService.getSelectedLanguage().subscribe(lang => {
			if (lang) {
				setTimeout(() => {
          this.setLanguage(lang);
         
				});
			}
		});
  }

}

