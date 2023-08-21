import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` <app-title
      [className]="classNameTitle"
      title="Bem-vindo(a)"
    ></app-title>    
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'meu-primeiro-projeto';

  classNameTitle: string = 'my_title';

  ngOnInit(): void {
    console.log(this.initConsole);
  }

  initConsole: string = 'Iniciou o AppComponent!!';
}
