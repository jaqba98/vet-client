import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { RouteEnum } from './enum/route.enum';
import { FetchUserGuard } from './guard/fetch-user.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RouteEnum.login,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard, FetchUserGuard],
  },
  {
    path: '**',
    redirectTo: RouteEnum.login,
    pathMatch: 'full',
  },
];
