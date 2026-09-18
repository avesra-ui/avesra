import { Injectable, signal } from '@angular/core';

import type { AvToolbarOrientation } from './toolbar.utils';

@Injectable()
export class AvToolbarContext {
  readonly orientation = signal<AvToolbarOrientation>('horizontal');
}
