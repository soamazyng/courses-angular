import { Component, Output, EventEmitter } from '@angular/core';

interface IItemList {
  name: string;
  age: number;
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() public dataList: EventEmitter<IItemList> =
    new EventEmitter<IItemList>();

  public list: Array<IItemList> = [
    { name: 'João', age: 20 },
    { name: 'Maria', age: 30 },
    { name: 'José', age: 40 },
  ];

  public getData(index: number): void {
    this.dataList.emit(this.list[index]);
  }
}
