import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { navReducer } from './reducer/nav.reducer';
import { routeReducer } from './reducer/route.reducer';

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore({ route: routeReducer, nav: navReducer }),
    provideStoreDevtools(),
  ],
};
