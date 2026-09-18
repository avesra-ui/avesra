import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideAvesraTheme } from '@avesra/styles';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAvesraTheme({ mode: 'system', persist: true }),
  ],
};
