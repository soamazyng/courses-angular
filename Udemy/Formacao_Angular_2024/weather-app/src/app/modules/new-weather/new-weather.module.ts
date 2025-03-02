import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [NewPageComponent],
  imports: [CommonModule],
  exports: [NewPageComponent],
})
export class NewWeatherModule {}
