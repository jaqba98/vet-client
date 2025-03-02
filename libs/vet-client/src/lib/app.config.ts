import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { route } from '@vet-client/lib-route';
import { storeConfig } from '@vet-client/lib-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(route),
    provideHttpClient(),
    ...storeConfig.providers
  ],
};
