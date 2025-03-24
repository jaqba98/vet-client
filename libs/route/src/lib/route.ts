import { Route } from '@angular/router'

import {
  AccountSettingsPageComponent,
  ChooseRolePageComponent,
  ClientAppointmentPageComponent, ClientClinicsPageComponent,
  ClientInvoicePageComponent, ClientMainPageComponent, ClientMedicalRecordPageComponent,
  ClientPageComponent,
  ClientPetsPageComponent,
  ClientSettingsPageComponent,
  DashboardMainPageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  ProfilePageComponent,
  RegistrationPageComponent,
  VetAppointmentPageComponent,
  VetClinicPageComponent,
  VetInvoicePageComponent, VetMainPageComponent,
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
  IsClientGuard,
  IsVetGuard,
  ValidTokenGuard,
  InvalidTokenGuard,
  HasNotRoleGuard,
} from '@vet-client/lib-guard'

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
        component: DashboardMainPageComponent,
        canActivate: [HasRoleGuard, IsVetGuard, IsClientGuard],
      },
      {
        path: 'choose-role',
        component: ChooseRolePageComponent,
        canActivate: [HasNotRoleGuard],
      },
      {
        path: 'vet',
        component: VetPageComponent,
        canActivate: [HasRoleGuard, IsVetGuard],
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
            path: 'appointment',
            component: VetAppointmentPageComponent,
          },
          {
            path: 'invoice',
            component: VetInvoicePageComponent,
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
        path: 'client',
        component: ClientPageComponent,
        canActivate: [HasRoleGuard, IsClientGuard],
        children: [
          {
            path: '',
            component: ClientMainPageComponent,
          },
          {
            path: 'settings',
            component: ClientSettingsPageComponent,
          },
          {
            path: 'pets',
            component: ClientPetsPageComponent,
          },
          {
            path: 'appointment',
            component: ClientAppointmentPageComponent,
          },
          {
            path: 'invoice',
            component: ClientInvoicePageComponent,
          },
          {
            path: 'medical-record',
            component: ClientMedicalRecordPageComponent,
          },
          {
            path: 'clinics',
            component: ClientClinicsPageComponent,
          },
          {
            path: 'dashboard/client/**',
            redirectTo: 'dashboard/client/',
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
