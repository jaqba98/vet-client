import { Route } from '@angular/router';

import {
  ChooseRolePageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  RegistrationPageComponent
} from '@vet-client/lib-page';
import { HasRoleGuard, LoggedInGuard, LoggedOutGuard, NotHasRoleGuard } from '@vet-client/lib-system';

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
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        component: DashboardPageComponent,
        canActivate: [HasRoleGuard]
      },
      {
        path: 'choose-role',
        component: ChooseRolePageComponent,
        canActivate: [NotHasRoleGuard]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
