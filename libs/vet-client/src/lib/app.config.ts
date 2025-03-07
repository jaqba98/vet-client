import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'

import { routeConfig } from '@vet-client/lib-route'
import { storeConfig } from '@vet-client/lib-store'
import { httpConfig } from '@vet-client/lib-http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...routeConfig.providers,
    ...httpConfig.providers,
    ...storeConfig.providers,
  ],
}
