import { Routes, RouterModule } from '@angular/router';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherHomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutes {}
