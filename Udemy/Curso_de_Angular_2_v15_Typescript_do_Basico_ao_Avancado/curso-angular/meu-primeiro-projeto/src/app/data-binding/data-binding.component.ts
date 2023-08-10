import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public nome: string = 'abc';
  public idade: number = 20;
  public checkDisabled: boolean = false;
  public urlImagem: string =
    'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp';
  public imgTitle: string = 'Imagem Angular';
  public position: { x: number; y: number } = { x: 0, y: 0 };
  public randomData: number = Math.random();

  constructor() {
    console.log(this.randomData);
  }

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
