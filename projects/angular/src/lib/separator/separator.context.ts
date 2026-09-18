import { Injectable, signal } from '@angular/core';

import type { AvSeparatorOrientation, AvSeparatorVariant } from './separator.utils';

@Injectable()
export class AvSeparatorContext {
  readonly orientation = signal<AvSeparatorOrientation>('horizontal');
  readonly variant = signal<AvSeparatorVariant>('default');
}
