import { Component } from '@angular/core';

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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
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
