import { Route } from '@angular/router'

import {
  AccountSettingsPageComponent,
  ChooseRolePageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  ProfilePageComponent,
  RegistrationPageComponent,
  VetAppointmentPageComponent, VetClientsPageComponent,
  VetClinicPageComponent,
  VetEmploymentPageComponent,
  VetInvoicePageComponent,
  VetMainPageComponent,
  VetMedicalRecordPageComponent,
  VetMedicationPageComponent,
  VetPageComponent,
  VetPatientsPageComponent,
  VetServicesPageComponent,
  VetSettingsPageComponent,
} from '@vet-client/lib-page'
import {
  GetAccountGuard,
  HasRoleGuard,
  ValidTokenGuard,
  InvalidTokenGuard,
  HasNotRoleGuard,
} from '@vet-client/lib-guard'
import { VetClinicOpeningHoursFormComponent } from '@vet-client/lib-form'

export const route: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [InvalidTokenGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [InvalidTokenGuard],
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [InvalidTokenGuard],
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [ValidTokenGuard, GetAccountGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/vet',
        pathMatch: 'full',
      },
      {
        path: 'choose-role',
        component: ChooseRolePageComponent,
        canActivate: [HasNotRoleGuard],
      },
      {
        path: 'vet',
        component: VetPageComponent,
        canActivate: [HasRoleGuard],
        children: [
          {
            path: '',
            component: VetMainPageComponent,
          },
          {
            path: 'settings',
            component: VetSettingsPageComponent,
          },
          {
            path: 'clinic',
            redirectTo: 'clinic/1',
            pathMatch: 'full',
          },
          {
            path: 'clinic/:page',
            component: VetClinicPageComponent,
          },
          {
            path: 'medical-record',
            component: VetMedicalRecordPageComponent,
          },
          {
            path: 'medication',
            redirectTo: 'medication/1',
            pathMatch: 'full',
          },
          {
            path: 'medication/:page',
            component: VetMedicationPageComponent,
          },
          {
            path: 'service',
            redirectTo: 'service/1',
            pathMatch: 'full',
          },
          {
            path: 'service/:page',
            component: VetServicesPageComponent,
          },
          {
            path: 'clinic-opening-hours',
            redirectTo: 'clinic-opening-hours/1',
            pathMatch: 'full',
          },
          {
            path: 'clinic-opening-hours/:page',
            component: VetClinicOpeningHoursFormComponent,
          },
          {
            path: 'employment',
            redirectTo: 'employment/1',
            pathMatch: 'full',
          },
          {
            path: 'employment/:page',
            component: VetEmploymentPageComponent,
          },
          {
            path: 'appointment',
            component: VetAppointmentPageComponent,
          },
          {
            path: 'invoice',
            component: VetInvoicePageComponent,
          },
          {
            path: 'clients',
            redirectTo: 'clients/1',
            pathMatch: 'full',
          },
          {
            path: 'clients/:page',
            component: VetClientsPageComponent,
          },
          {
            path: 'patients',
            component: VetPatientsPageComponent,
          },
          {
            path: 'dashboard/vet/**',
            redirectTo: 'dashboard/vet/',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'account-settings',
        component: AccountSettingsPageComponent,
        canActivate: [HasRoleGuard],
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [HasRoleGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]
