import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  public get(): Observable<Food<IFood>> {
    return this.http
      .get<Food<IFood>>(`${environment.apiUrl + this.url}`, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public save(food: IFood): Observable<IFood> {
    return this.http
      .post<IFood>(
        `${environment.apiUrl + this.url}`,
        {
          id: food.id,
          name: food.name,
        },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public edit(id: string, food: IFood): Observable<IFood> {
    return this.http
      .put<IFood>(
        `${environment.apiUrl + this.url}/${id}`,
        {
          id: food.id,
          name: food.name,
        },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public delete(id: string): Observable<IFood> {
    return this.http
      .delete<IFood>(`${environment.apiUrl + this.url}/${id}`)
      .pipe(
        (res) => res,
        (error) => error
      );
  }
  public producer(food: IFood): void {
    this.emitEvent.emit(food);
  }
}
