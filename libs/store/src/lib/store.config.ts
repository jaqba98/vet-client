import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { accountReducer } from './reducer/database/account.reducer'
import { routeReducer } from './reducer/common/route.reducer'
import { navReducer } from './reducer/common/nav.reducer'
import { clinicTableFormReducer } from './reducer/domain/independent/clinic-table-form.reducer'
import { serviceClinicTableFormReducer } from './reducer/domain/dependent/service-clinic-table-form.reducer'
import { openingHourTableFormReducer } from './reducer/domain/dependent/opening-hour-table-form.reducer'
import { employmentTableFormReducer } from './reducer/domain/dependent/employment-table-form.reducer'
import { medicationTableFormReducer } from './reducer/domain/dependent/medication-table-form.reducer'
import { clientTableFormReducer } from './reducer/domain/dependent/client-table-form.reducer'
import { petTableFormReducer } from './reducer/domain/dependent/pet-table-form.reducer'
import { appointmentTableFormReducer } from './reducer/domain/dependent/appointment-table-form.reducer'
import { invoiceTableFormReducer } from './reducer/domain/dependent/invoice-table-form.reducer'
import { medicalRecordTableFormReducer } from './reducer/domain/dependent/medical-record-table-form.reducer'
import { vetFormReducer } from './reducer/domain/dependent/vet-form.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      account: accountReducer,
      route: routeReducer,
      nav: navReducer,
      clinicTableForm: clinicTableFormReducer,
      serviceClinicTableForm: serviceClinicTableFormReducer,
      openingHourTableForm: openingHourTableFormReducer,
      employmentTableForm: employmentTableFormReducer,
      medicationTableForm: medicationTableFormReducer,
      clientTableForm: clientTableFormReducer,
      petTableForm: petTableFormReducer,
      appointmentTableForm: appointmentTableFormReducer,
      invoiceTableForm: invoiceTableFormReducer,
      medicalRecordTableForm: medicalRecordTableFormReducer,
      vetForm: vetFormReducer,
    }),
    provideStoreDevtools(),
  ],
}
