import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherRoutes } from './weather.routing';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [WeatherHomeComponent, WeatherCardComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule, WeatherRoutes],
  exports: [WeatherHomeComponent, WeatherCardComponent, WeatherRoutes],
})
export class WeatherModule {}
