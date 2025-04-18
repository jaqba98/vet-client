import { ApplicationConfig } from '@angular/core'
import { provideRouter, withHashLocation } from '@angular/router'

import { route } from './route'

export const routeConfig: ApplicationConfig = {
  providers: [provideRouter(route, withHashLocation())],
}
