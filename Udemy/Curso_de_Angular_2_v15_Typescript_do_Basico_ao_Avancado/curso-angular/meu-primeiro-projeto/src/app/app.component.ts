import { Component, OnInit } from '@angular/core';

interface ServerElement {
  type: string;
  name: string;
  content: string;
}

interface IItemList {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  template: ` <app-title
      [className]="classNameTitle"
      title="Bem-vindo(a)"
    ></app-title>
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Titulo renderizado</h1>
      <h2>em um ng content</h2>
    </app-diretivas-atributos> -->
    <!-- <app-diretivas-atributos>
      <h1>Titulo renderizado 002</h1>
      <h2>em um ng content 002</h2>
    </app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->
    <!-- <ng-template [ngIf]="dataItem">
      <h1>{{ dataItem.name }}</h1>
      <h2>{{ dataItem.age }}</h2>
    </ng-template>
    <app-output (dataList)="setData($event)"></app-output> -->
    <!-- <app-input [contador]="addValue"></app-input>
    <button (click)="addValue = addValue + 1">Adicionar</button>
    <app-server-element
      *ngFor="let serverElement of serverElements"
      [element]="serverElement"
    ></app-server-element> -->
    <!-- <app-food-list></app-food-list>
    <app-food-add></app-food-add> -->
    <app-forms></app-forms>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'meu-primeiro-projeto';

  classNameTitle: string = 'my_title';

  public addValue: number = 0;

  public dataItem: IItemList | undefined;

  public serverElements: Array<ServerElement> = [
    { type: 'server', name: 'TestServer', content: 'just a test' },
    { type: 'server 2', name: 'TestServer2', content: 'just a test2' },
  ];

  ngOnInit(): void {
    console.log(this.initConsole);
  }

  public setData(item: IItemList): void {
    this.dataItem = item;
  }

  initConsole: string = 'Iniciou o AppComponent!!';
}
