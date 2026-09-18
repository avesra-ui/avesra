import { makeEnvironmentProviders, type Provider } from '@angular/core';

import { AV_TOAST_CONFIG } from './toast.token';
import type { AvToastConfig } from './toast.types';
import { AvToastService } from './toast.service';

/**
 * Registers the toast service (and optional defaults) at the application level.
 *
 * @example
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideAvesraToast({ life: 4000 })],
 * });
 * ```
 */
export function provideAvesraToast(
  config: AvToastConfig = {},
): ReturnType<typeof makeEnvironmentProviders> {
  const providers: Provider[] = [AvToastService];

  if (Object.keys(config).length > 0) {
    providers.push({ provide: AV_TOAST_CONFIG, useValue: config });
  }

  return makeEnvironmentProviders(providers);
}
