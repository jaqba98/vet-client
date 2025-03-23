import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/common/nav.reducer'
import { accountReducer } from './reducer/database/account.reducer'
import { vetClinicTableFormReducer } from './reducer/domain/vet-clinic-table-form.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      account: accountReducer,
      route: routeReducer,
      nav: navReducer,
      vetClinicTableForm: vetClinicTableFormReducer,
    }),
    provideStoreDevtools(),
  ],
}
