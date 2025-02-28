import { Route } from '@angular/router';

import {
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  RegistrationPageComponent
} from '@vet-client/lib-page';
import { LoggedInGuard, LoggedOutGuard } from '@vet-client/lib-system';

export const route: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
