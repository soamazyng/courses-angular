import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    ServerElementComponent,
    OutputComponent,
    FoodListComponent,
  ],
  imports: [CommonModule],
  exports: [
    NewComponentComponent,
    InputComponent,
    ServerElementComponent,
    OutputComponent,
    FoodListComponent,
  ],
})
export class SharedModule {}
