// done
import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/nav.reducer'
import { accountReducer } from './reducer/account.reducer'
import { logoutDomainDataReducer } from './reducer/domain/data/logout-domain-data.reducer'
import { logoutDomainFormReducer } from './reducer/domain/form/logout-domain-form.reducer'
import { logoutDomainResponseReducer } from './reducer/domain/response/logout-domain-response.reducer'
import { clinicDomainDataReducer } from './reducer/domain/data/clinic-domain-data.reducer'
import { clinicDomainFormReducer } from './reducer/domain/form/clinic-domain-form.reducer'
import { clinicDomainResponseReducer } from './reducer/domain/response/clinic-domain-response.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      route: routeReducer,
      nav: navReducer,
      account: accountReducer,
      logoutDomainData: logoutDomainDataReducer,
      logoutDomainForm: logoutDomainFormReducer,
      logoutDomainResponse: logoutDomainResponseReducer,
      clinicDomainData: clinicDomainDataReducer,
      clinicDomainForm: clinicDomainFormReducer,
      clinicDomainResponse: clinicDomainResponseReducer,
    }),
    provideStoreDevtools(),
  ],
}
