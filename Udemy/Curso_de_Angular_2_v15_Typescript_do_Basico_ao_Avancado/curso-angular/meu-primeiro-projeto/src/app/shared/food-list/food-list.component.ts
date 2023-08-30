import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent {
  constructor(private foodListService: FoodListService) {}

  public getFoodList(): Array<string> {
    return this.foodListService.getFoodList();
  }
}
