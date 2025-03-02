import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WeatherModule } from './modules/weather/weather.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeatherRoutes } from './modules/weather/weather.routing';
import { NewWeatherModule } from './modules/new-weather/new-weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    WeatherModule,
    WeatherRoutes,
    NewWeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
