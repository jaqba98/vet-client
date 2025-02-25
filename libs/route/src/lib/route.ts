import { Route } from '@angular/router';

import { DashboardPageComponent, HomePageComponent, RegistrationPageComponent } from '@vet-client/lib-page';
import { AuthGuard } from '@vet-client/lib-system';

export const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
