import { Route } from '@angular/router';

import {
  AccountSettingsPageComponent,
  ChooseRolePageComponent,
  ClientPageComponent,
  DashboardMainPageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  ProfilePageComponent,
  RegistrationPageComponent,
  VetClinicPageComponent,
  VetMedicalRecordPageComponent,
  VetMedicationPageComponent,
  VetPageComponent,
  VetServicesPageComponent,
  VetSettingsPageComponent
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
        canActivate: [HasRoleGuard, IsVetRoleGuard],
        children: [
          {
            path: 'settings',
            component: VetSettingsPageComponent
          },
          {
            path: 'clinic',
            component: VetClinicPageComponent
          },
          {
            path: 'medical-record',
            component: VetMedicalRecordPageComponent
          },
          {
            path: 'medication',
            component: VetMedicationPageComponent
          },
          {
            path: 'services',
            component: VetServicesPageComponent
          }
        ]
      },
      {
        path: 'client',
        component: ClientPageComponent,
        canActivate: [HasRoleGuard, IsClientRoleGuard]
      },
      {
        path: 'account-settings',
        component: AccountSettingsPageComponent,
        canActivate: [HasRoleGuard]
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [HasRoleGuard]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
