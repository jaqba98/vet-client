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
import {
  GetAccountGuard,
  HasRoleGuard,
  IsClientRoleGuard,
  IsVetRoleGuard,
  LoggedInGuard,
  LoggedOutGuard,
  NotHasRoleGuard
} from '@vet-client/lib-guard';

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
    canActivate: [LoggedInGuard, GetAccountGuard],
    children: [
      {
        path: '',
        component: DashboardMainPageComponent,
        canActivate: [HasRoleGuard, IsVetRoleGuard, IsClientRoleGuard]
      },
      {
        path: 'choose-role',
        component: ChooseRolePageComponent,
        canActivate: [NotHasRoleGuard]
      },
      {
        path: 'vet',
        component: VetPageComponent,
        canActivate: [HasRoleGuard, IsVetRoleGuard]
      },
      {
        path: 'client',
        component: ClientPageComponent,
        canActivate: [HasRoleGuard, IsClientRoleGuard]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
