import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/entities/interfaces/food';
import { IFood } from 'src/app/entities/interfaces/ifood';
import { FoodListService } from 'src/app/services/food-list.service';

interface foodObject {
  data: IFood;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent {
  public foodList: Array<IFood> | undefined;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
      next: (res: Food<IFood>) => {
        this.foodList = res.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });

    this.foodListService.emitEvent.subscribe((res: foodObject) => {
      this.foodList?.push(res.data);
      console.log(res);
    });
  }
}
