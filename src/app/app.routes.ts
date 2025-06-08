import {Routes} from '@angular/router';

import {LoginViewComponent} from './view/login/login-view.component';
import {ProfileViewComponent} from './view/profile/profile-view.component';
import {LoginGuard} from './guard/login.guard';
import {AuthGuard} from './guard/auth.guard';
import {RouteEnum} from './enum/route.enum';
import {FetchUserGuard} from './guard/fetch-user.guard';
import {RouteIdEnum} from './enum/route-id.enum';
import {RecordingsListComponent} from './view/profile/recordings-list/recordings-list-view.component';
import {HealthBotViewComponent} from './view/profile/health-bot/health-bot-view.component';
import {RecordViewComponent} from './view/profile/record/record-view.component';

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
    children: [
      {
        path: '',
        redirectTo: '/profile/recordings',
        pathMatch: 'full',
      },
      {
        path: 'record',
        component: RecordViewComponent,
      },
      {
        path: 'recordings',
        component: RecordingsListComponent,
      },
      {
        path: 'health-bot',
        component: HealthBotViewComponent,
      }
    ]
  },
  {
    path: RouteIdEnum.other,
    redirectTo: RouteEnum.login,
    pathMatch: 'full',
  },
];
