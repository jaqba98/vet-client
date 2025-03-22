import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/nav.reducer'
import { accountReducer } from './reducer/database/account.reducer'
import { clinicDomainDataReducer } from './reducer/domain/data/clinic-domain-data.reducer'
import { clinicDomainResponseReducer } from './reducer/domain/response/clinic-domain-response.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      account: accountReducer,
      route: routeReducer,
      nav: navReducer,
      clinicDomainData: clinicDomainDataReducer,
      clinicDomainResponse: clinicDomainResponseReducer,
    }),
    provideStoreDevtools(),
  ],
}
