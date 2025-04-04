import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/common/nav.reducer'
import { accountReducer } from './reducer/database/account.reducer'
import { clinicTableFormReducer } from './reducer/domain/clinic-table-form.reducer'
import { serviceTableFormReducer } from './reducer/domain/service-table-form.reducer'
import { clinicOpeningHoursTableFormReducer } from './reducer/domain/clinic-opening-hours-table-form.reducer'
import { employmentTableFormReducer } from './reducer/domain/employment-table-form.reducer'
import { medicationTableFormReducer } from './reducer/domain/medication-table-form.reducer'
import { clientTableFormReducer } from './reducer/domain/client-table-form.reducer'
import { petTableFormReducer } from './reducer/domain/pet-table-form.reducer'
import { appointmentTableFormReducer } from './reducer/domain/appointment-table-form.reducer'
import { invoiceTableFormReducer } from './reducer/domain/invoice-table-form.reducer'
import { medicalRecordTableFormReducer } from './reducer/domain/medical-record-table-form.reducer'
import { vetFormReducer } from './reducer/domain/vet-form.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      account: accountReducer,
      route: routeReducer,
      nav: navReducer,
      clinicTableForm: clinicTableFormReducer,
      serviceTableForm: serviceTableFormReducer,
      clinicOpeningHoursTableForm: clinicOpeningHoursTableFormReducer,
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
