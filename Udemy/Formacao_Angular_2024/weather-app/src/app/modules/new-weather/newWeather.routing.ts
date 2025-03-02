import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';

const routes: Routes = [
  {
    path: 'new-weather',
    component: NewPageComponent,
  },
];

export const NewWeatherRoutes = RouterModule.forChild(routes);
