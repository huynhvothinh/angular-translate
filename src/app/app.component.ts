import {Component} from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core'; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: any ={
      name: null
    }
    message: string = "";

    constructor(private translate: TranslateService) {
        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.message = translate.instant('messageRoot', {email: 'abc@gmail.com'});
        });

        translate.setDefaultLang('en');    
        this.translate.use('en');     
    }
    
    ngOnInit(){ 
        this.user.name = "ANGULAR";
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }
}