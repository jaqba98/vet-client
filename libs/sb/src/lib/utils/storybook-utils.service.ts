import { applicationConfig, type Meta } from '@storybook/angular'

import { routeConfig } from '@vet-client/lib-route'
import { httpConfig } from '@vet-client/lib-http'
import { storeConfig } from '@vet-client/lib-store'

export class StorybookUtilsService {
  static getProviders(): Meta {
    return {
      decorators: [
        applicationConfig({
          providers: [
            ...routeConfig.providers,
            ...httpConfig.providers,
            ...storeConfig.providers,
          ],
        }),
      ],
    }
  }

  static getFullscreen(): Meta {
    return {
      parameters: {
        layout: 'fullscreen',
      },
    }
  }
}
