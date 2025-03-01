import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { route } from '@vet-client/lib-route';
import { routeReducer } from '@vet-client/lib-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(route),
    provideHttpClient(),
    provideStore({ route: routeReducer }),
    provideStoreDevtools()
  ],
};
