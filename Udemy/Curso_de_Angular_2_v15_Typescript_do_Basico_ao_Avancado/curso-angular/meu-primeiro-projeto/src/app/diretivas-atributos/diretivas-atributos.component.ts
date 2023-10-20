import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public myValor: boolean = false;
  public myFontSize: boolean = true;
  public colorBg: string = 'red';
  public nameItem: string;
  public items: Array<{ name: string }> = [{ name: 'Item 1' }];
  public dateDataPipe: Date = new Date();

  constructor(private router: Router) {
    this.nameItem = '';
  }
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  public changeValor(): void {
    this.myValor = !this.myValor;
    this.myFontSize = !this.myFontSize;
  }

  public addItem(): void {
    this.items.push({ name: this.nameItem });
    this.nameItem = '';

    // direciona o usuário para forms
    this.router.navigate(['/forms-reactive']);
  }
}
