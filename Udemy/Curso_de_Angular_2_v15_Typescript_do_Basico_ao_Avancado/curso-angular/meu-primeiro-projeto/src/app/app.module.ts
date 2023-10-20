import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DiretivasPageComponent } from './pages/diretivas-page/diretivas-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { FormsReactivePageComponent } from './pages/forms-reactive-page/forms-reactive-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FormsChildPageComponent } from './pages/forms-child-page/forms-child-page.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    FormsComponent,
    ReactiveFormsComponent,
    DiretivasPageComponent,
    FormsPageComponent,
    FormsReactivePageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    DashboardPageComponent,
    FormsChildPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
