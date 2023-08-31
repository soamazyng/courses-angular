import { Component } from '@angular/core';
import { Food } from 'src/app/entities/interfaces/food';
import { IFood } from 'src/app/entities/interfaces/ifood';
import { FoodListService } from 'src/app/services/food-list.service';

interface IFoodObject {
  data: IFood;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent {
  public foodList: Array<IFood> | undefined;

  constructor(private _foodListService: FoodListService) {
    this._foodListService.get().subscribe({
      next: (res: Food<IFood>) => {
        this.foodList = res.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });

    this._foodListService.emitEvent.subscribe((res: IFoodObject) => {
      this.foodList?.push(res.data);
      console.log(res);
    });
  }

  public deleteFood(id: string): void {
    this._foodListService.delete(id).subscribe({
      next: (res: IFood) => {
        this.foodList = this.foodList?.filter((food) => food.id !== id);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public updateFood(id: string, name: string): void {
    this._foodListService.edit(id, { id, name }).subscribe({
      next: (res: IFood) => {
        this.foodList = this.foodList?.map((food) => {
          if (food.id === id) {
            food.name = name;
          }
          return food;
        });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    console.log(id, name);
  }
}
