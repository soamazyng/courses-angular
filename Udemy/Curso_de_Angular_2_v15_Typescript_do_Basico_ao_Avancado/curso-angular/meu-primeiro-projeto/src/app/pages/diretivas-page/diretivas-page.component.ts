import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-page',
  styleUrls: ['./diretivas-page.component.scss'],
  template: `
    <app-diretivas-atributos>
      <h1>Titulo renderizado</h1>
      <h2>em um ng content</h2>
    </app-diretivas-atributos>
    <app-diretivas-atributos>
      <h1>Titulo renderizado 002</h1>
      <h2>em um ng content 002</h2>
    </app-diretivas-atributos>
    <app-diretivas-estruturais></app-diretivas-estruturais>
  `,
})
export class DiretivasPageComponent {}
