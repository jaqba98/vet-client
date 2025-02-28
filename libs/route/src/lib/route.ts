import { Route } from '@angular/router';

import {
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  RegistrationPageComponent
} from '@vet-client/lib-page';

export const route: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
