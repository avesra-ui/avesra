import { Injectable, signal } from '@angular/core';

import type { AvTableVariant } from './table.utils';

@Injectable()
export class AvTableContext {
  readonly variant = signal<AvTableVariant>('primary');
}
