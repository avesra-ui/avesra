import { Injectable, signal } from '@angular/core';

import type { AvPaginationSize } from './pagination.utils';

@Injectable()
export class AvPaginationContext {
  readonly size = signal<AvPaginationSize>('md');
}
