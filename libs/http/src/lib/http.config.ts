import { ApplicationConfig } from '@angular/core'
import { provideHttpClient } from '@angular/common/http'

export const httpConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ],
}
