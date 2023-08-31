import { v4 as uuidv4 } from 'uuid';

import { IFood } from './../../entities/interfaces/ifood';
import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) {}

  public addFood(food: string): void {
    let myFood: IFood = { name: food, id: uuidv4() };

    // nesse caso o subscribe serve para aguardar a resposta,
    // sem ele o post funcionaria normalmente
    this.foodListService.save(myFood).subscribe({
      next: (res: IFood) => {
        this.foodListService.producer(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
