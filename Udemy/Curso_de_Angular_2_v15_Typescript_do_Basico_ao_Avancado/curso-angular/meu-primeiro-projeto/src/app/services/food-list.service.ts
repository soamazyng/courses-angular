import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = [
    'Pizza',
    'Hamburger',
    'Hot Dog',
    'Sushi',
    'Pasta',
    'Salad',
  ];

  constructor() {}

  public getFoodList(): Array<string> {
    return this.list;
  }
}
