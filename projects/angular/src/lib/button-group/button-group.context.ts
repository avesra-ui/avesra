import { Injectable, signal } from '@angular/core';

import type { AvButtonSize, AvButtonVariant } from '../button/button.utils';

@Injectable()
export class AvButtonGroupContext {
  readonly variant = signal<AvButtonVariant | undefined>(undefined);
  readonly size = signal<AvButtonSize | undefined>(undefined);
  readonly disabled = signal(false);
  readonly fullWidth = signal(false);
}
