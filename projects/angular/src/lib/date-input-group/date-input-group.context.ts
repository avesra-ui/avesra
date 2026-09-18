import { Injectable, signal } from '@angular/core';

import type { AvDateInputGroupVariant } from './date-input-group.utils';

@Injectable()
export class AvDateInputGroupContext {
  readonly variant = signal<AvDateInputGroupVariant>('primary');
  readonly fullWidth = signal(false);
  readonly disabled = signal(false);
  readonly invalid = signal(false);
}
