import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent {
  public myValor: boolean = false;
  public myFontSize: boolean = true;
  public colorBg: string = 'red';
  public nameItem: string;
  public items: Array<{ name: string }> = [{ name: 'Item 1' }];
  public dateDataPipe: Date = new Date();

  constructor() {
    this.nameItem = '';
  }

  public changeValor(): void {
    this.myValor = !this.myValor;
    this.myFontSize = !this.myFontSize;
  }

  public addItem(): void {
    this.items.push({ name: this.nameItem });
    this.nameItem = '';
  }
}
