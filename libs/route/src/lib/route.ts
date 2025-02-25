import { Route } from '@angular/router';

import { DashboardPageComponent, HomePageComponent, RegistrationPageComponent } from '@vet-client/lib-page';
import { DashboardGuard, OutsideGuard } from '@vet-client/lib-system';

export const route: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [OutsideGuard]
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [OutsideGuard]
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
