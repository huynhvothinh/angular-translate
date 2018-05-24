import { Component, OnInit } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string = "";

  constructor(private translate: TranslateService) { 
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.message = translate.instant('message');
    });

  }

  ngOnInit() {
  }

}
