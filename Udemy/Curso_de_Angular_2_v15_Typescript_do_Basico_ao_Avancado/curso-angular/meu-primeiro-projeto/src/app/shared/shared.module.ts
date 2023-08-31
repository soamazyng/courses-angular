import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    ServerElementComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [
    NewComponentComponent,
    InputComponent,
    ServerElementComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
})
export class SharedModule {}
