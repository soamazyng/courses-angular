import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasPageComponent } from './pages/diretivas-page/diretivas-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { FormsReactivePageComponent } from './pages/forms-reactive-page/forms-reactive-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FormsChildPageComponent } from './pages/forms-child-page/forms-child-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'diretivas',
    component: DiretivasPageComponent,
  },
  {
    path: 'forms/:id/:username',
    component: FormsPageComponent,
  },
  {
    path: 'forms-reactive',
    children: [
      {
        path: '',
        component: FormsReactivePageComponent,
      },
      {
        path: 'inside-page',
        component: FormsChildPageComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
