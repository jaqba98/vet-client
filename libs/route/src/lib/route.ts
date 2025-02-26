import { Route } from '@angular/router';

import {
  DashboardPageComponent,
  ForgotPasswordPageComponent,
  HomeIndexPageComponent,
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
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: HomeIndexPageComponent
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
        path: 'forgot-password',
        component: ForgotPasswordPageComponent
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ]
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
