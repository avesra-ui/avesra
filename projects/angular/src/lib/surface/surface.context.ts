import { Injectable, signal } from '@angular/core';

import type { AvSurfaceVariant } from './surface.utils';

@Injectable()
export class AvSurfaceContext {
  readonly variant = signal<AvSurfaceVariant | undefined>(undefined);
}
