import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageDashboardComponent } from './pages/home-page-dashboard/home-page-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomePageDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
