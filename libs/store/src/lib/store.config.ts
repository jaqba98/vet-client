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
    }),
    provideStoreDevtools(),
  ],
}
