import { Route } from '@angular/router';

import {
  ChooseRolePageComponent,
  ClientPageComponent,
  DashboardMainPageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  RegistrationPageComponent,
  VetPageComponent
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
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        component: DashboardMainPageComponent,
      },
      {
        path: 'choose-role',
        component: ChooseRolePageComponent,
      },
      {
        path: 'vet',
        component: VetPageComponent,
      },
      {
        path: 'client',
        component: ClientPageComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
