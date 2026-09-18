import { InjectionToken } from '@angular/core';

import type { AvToastConfig } from './toast.types';

export const AV_TOAST_CONFIG = new InjectionToken<AvToastConfig>('AV_TOAST_CONFIG');
