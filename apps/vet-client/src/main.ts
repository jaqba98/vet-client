import { bootstrapApplication } from '@angular/platform-browser'

import { AppComponent, appConfig } from '@vet-client/lib-vet-client'

bootstrapApplication(AppComponent, appConfig).catch(err =>
  console.error(err),
)
