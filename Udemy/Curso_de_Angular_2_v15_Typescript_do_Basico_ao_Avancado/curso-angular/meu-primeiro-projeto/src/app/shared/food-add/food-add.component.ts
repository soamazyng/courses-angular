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
    let myFood: IFood = { name: food, id: 'teste' };

    this.foodListService.addFood(myFood).subscribe({
      next: (res: IFood) => {
        this.foodListService.producerFoodList(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
