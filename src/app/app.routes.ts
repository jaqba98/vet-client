import { Routes } from '@angular/router';

import { LoginViewComponent } from './view/login/login-view.component';
import { ProfileViewComponent } from './view/profile/profile-view.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { RouteEnum } from './enum/route.enum';
import { FetchUserGuard } from './guard/fetch-user.guard';
import { RouteIdEnum } from './enum/route-id.enum';

export const routes: Routes = [
  {
    path: RouteIdEnum.empty,
    redirectTo: RouteEnum.login,
    pathMatch: 'full',
  },
  {
    path: RouteIdEnum.login,
    component: LoginViewComponent,
    canActivate: [LoginGuard],
  },
  {
    path: RouteIdEnum.profile,
    component: ProfileViewComponent,
    canActivate: [AuthGuard, FetchUserGuard],
  },
  {
    path: RouteIdEnum.other,
    redirectTo: RouteEnum.login,
    pathMatch: 'full',
  },
];
