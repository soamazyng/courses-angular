import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageDashboardComponent } from './pages/home-page-dashboard/home-page-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
