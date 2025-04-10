import { Route } from '@angular/router'

import {
  AccountSettingsPageComponent,
  ChooseRolePageComponent,
  DashboardPageComponent,
  HomePageComponent,
  LoginPageComponent,
  ProfilePageComponent,
  RegistrationPageComponent,
  VetAppointmentPageComponent,
  VetClientsPageComponent,
  VetClinicPageComponent,
  VetEmploymentPageComponent,
  VetInvoicePageComponent,
  VetMainPageComponent,
  VetMedicalRecordPageComponent,
  VetMedicationPageComponent, VetOpeningHourPageComponent,
  VetPageComponent,
  VetPetsPageComponent,
  VetServiceClinicPageComponent,
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
        path: 'vet',
        component: VetPageComponent,
        canActivate: [HasRoleGuard],
        children: [
          {
            path: '',
            redirectTo: '/dashboard/vet/main',
          },
          {
            path: 'appointment',
            redirectTo: 'appointment/1',
            pathMatch: 'full',
          },
          {
            path: 'appointment/:page',
            component: VetAppointmentPageComponent,
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
            path: 'clinic',
            redirectTo: 'clinic/1',
            pathMatch: 'full',
          },
          {
            path: 'clinic/:page',
            component: VetClinicPageComponent,
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
            path: 'invoice',
            redirectTo: 'invoice/1',
            pathMatch: 'full',
          },
          {
            path: 'invoice/:page',
            component: VetInvoicePageComponent,
          },
          {
            path: 'main',
            component: VetMainPageComponent,
          },
          {
            path: 'medical-record',
            redirectTo: 'medical-record/1',
            pathMatch: 'full',
          },
          {
            path: 'medical-record/:page',
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
            path: 'opening-hour',
            redirectTo: 'opening-hour/1',
            pathMatch: 'full',
          },
          {
            path: 'opening-hour/:page',
            component: VetOpeningHourPageComponent,
          },
          {
            path: 'pets',
            redirectTo: 'pets/1',
            pathMatch: 'full',
          },
          {
            path: 'pets/:page',
            component: VetPetsPageComponent,
          },
          {
            path: 'service-clinic',
            redirectTo: 'service-clinic/1',
            pathMatch: 'full',
          },
          {
            path: 'service-clinic/:page',
            component: VetServiceClinicPageComponent,
          },
          {
            path: 'settings',
            component: VetSettingsPageComponent,
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
        path: 'choose-role',
        component: ChooseRolePageComponent,
        canActivate: [HasNotRoleGuard],
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [HasRoleGuard],
      },
    ],
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
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]
