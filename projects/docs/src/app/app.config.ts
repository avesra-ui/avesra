import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import {
  ApplicationConfig,
  inject,
  PLATFORM_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideAvesraTheme } from '@avesra/styles';

import { routes } from './app.routes';
import { getDocsStickyOffsetPx } from './utils/docs-anchor-scroll';

function initDocsAnchorScrollOffset(): void {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) {
    return;
  }

  inject(ViewportScroller).setOffset(() => [0, getDocsStickyOffsetPx()]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAppInitializer(initDocsAnchorScrollOffset),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideClientHydration(withEventReplay()),
    provideAvesraTheme({ mode: 'dark', persist: true }),
  ],
};
