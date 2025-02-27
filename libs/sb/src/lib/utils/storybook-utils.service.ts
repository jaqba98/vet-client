import { applicationConfig, type Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';

export class StorybookUtilsService {
  static getFormConfiguration(): Meta {
    return {
      decorators: [
        applicationConfig({
          providers: [provideHttpClient()],
        }),
      ]
    }
  }

  static getPageConfiguration(): Meta {
    return {
      parameters: {
        layout: 'fullscreen'
      }
    }
  }
}
