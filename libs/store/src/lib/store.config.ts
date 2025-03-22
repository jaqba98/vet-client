// done
import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/nav.reducer'
import { accountReducer } from './reducer/account.reducer'
import { clinicDomainDataReducer } from './reducer/domain/data/clinic-domain-data.reducer'
import { clinicDomainFormReducer } from './reducer/domain/form/clinic-domain-form.reducer'
import { clinicDomainResponseReducer } from './reducer/domain/response/clinic-domain-response.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      route: routeReducer,
      nav: navReducer,
      account: accountReducer,
      clinicDomainData: clinicDomainDataReducer,
      clinicDomainForm: clinicDomainFormReducer,
      clinicDomainResponse: clinicDomainResponseReducer,
    }),
    provideStoreDevtools(),
  ],
}
