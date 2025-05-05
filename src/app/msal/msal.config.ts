import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '7724a444-6429-4af6-b14c-752e4cc07cd7',
    authority:
      'https://login.microsoftonline.com/73bc76b8-20d3-4546-8194-3fa45f76f6e2',
    redirectUri: 'http://localhost:4200',
  },
  cache: {
    cacheLocation: 'localStorage',
  },
};
