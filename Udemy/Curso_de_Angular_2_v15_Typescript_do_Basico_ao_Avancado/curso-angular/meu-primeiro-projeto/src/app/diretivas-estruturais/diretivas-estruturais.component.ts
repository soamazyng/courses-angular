import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  age?: number;
}

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true;
  public conditionButton: boolean = true;
  public nameValue: string = 'Jay';
  public items: Array<Item> = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'item 2', age: 30 },
    { id: 3, name: 'item 3', age: 40 },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 1000);
  }

  public changeCondition(): void {
    this.conditionButton = !this.conditionButton;
  }

  public addItem(): void {
    this.items.push({ id: 4, name: 'item 4', age: 50 });
  }

  public removeItem(event: number): void {
    this.items.splice(event, 1);
  }

  public nameRandom(): void {
    const names = ['John', 'item 2', 'item 3'];
    this.nameValue = names[Math.floor(Math.random() * names.length)];
  }
}
