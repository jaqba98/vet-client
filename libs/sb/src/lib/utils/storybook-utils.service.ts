import { applicationConfig, type Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export class StorybookUtilsService {
  static getFormConfiguration(): Meta {
    return {
      decorators: [
        applicationConfig({
          providers: [provideHttpClient(), provideStore(), provideStoreDevtools()],
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
