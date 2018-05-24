import { Component, OnInit } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "";

  constructor( private translate: TranslateService) { 
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.message = translate.instant('message');
    });
 
  }

  ngOnInit() {
  }

}
