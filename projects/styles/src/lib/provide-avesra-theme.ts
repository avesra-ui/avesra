import { makeEnvironmentProviders, Provider } from '@angular/core';

import { AV_THEME_OPTIONS, AvThemeOptions } from './theme.model';
import { AvThemeService } from './theme.service';

/**
 * Registers Avesra theme services and optional configuration.
 *
 * @example
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideAvesraTheme({ mode: 'system', persist: true })],
 * });
 * ```
 */
export function provideAvesraTheme(options: AvThemeOptions = {}): ReturnType<typeof makeEnvironmentProviders> {
  const providers: Provider[] = [AvThemeService];

  if (Object.keys(options).length > 0) {
    providers.push({ provide: AV_THEME_OPTIONS, useValue: options });
  }

  return makeEnvironmentProviders(providers);
}
