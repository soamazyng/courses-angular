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
}
