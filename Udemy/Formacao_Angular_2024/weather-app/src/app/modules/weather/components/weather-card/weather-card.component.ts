import { Component, Input } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Weather } from '../../models/interfaces/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weather: Weather | undefined;

  public minTemperatureIcon = faTemperatureLow;
  public maxTemperatureIcon = faTemperatureHigh;
  public humidityIcon = faDroplet;
  public windIcon = faWind;
}
