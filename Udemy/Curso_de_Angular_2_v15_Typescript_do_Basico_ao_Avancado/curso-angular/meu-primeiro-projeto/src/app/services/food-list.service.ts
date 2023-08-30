import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../entities/interfaces/food';
import { IFood } from '../entities/interfaces/ifood';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private url: string = '/foods';

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    'Pizza',
    'Hamburger',
    'Hot Dog',
    'Sushi',
    'Pasta',
    'Salad',
  ];

  constructor(private http: HttpClient) {}

  public getFoodList(): Observable<Food<IFood>> {
    return this.http.get<Food<IFood>>(`${environment.apiUrl + this.url}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public addFood(food: IFood): Observable<IFood> {
    return this.http
      .post<IFood>(`${environment.apiUrl + this.url}`, {
        id: food.id,
        name: food.name,
      })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public producerFoodList(food: IFood): void {
    this.emitEvent.emit(food);
  }
}
