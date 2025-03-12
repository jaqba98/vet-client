// done
import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routeReducer } from './reducer/route.reducer'
import { navReducer } from './reducer/nav.reducer'
import { accountReducer } from './reducer/account.reducer'
import { loginDomainFormReducer } from './reducer/domain/form/login-domain-form.reducer'
import { loginDomainDataReducer } from './reducer/domain/data/login-domain-data.reducer'

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({
      route: routeReducer,
      nav: navReducer,
      account: accountReducer,
      loginDomainData: loginDomainDataReducer,
      loginDomainForm: loginDomainFormReducer,
    }),
    provideStoreDevtools(),
  ],
}
