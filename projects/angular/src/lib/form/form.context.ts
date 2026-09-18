import { Injectable, signal } from '@angular/core';

import type { AvFormValidationBehavior, AvFormValidationErrors } from './form.utils';

@Injectable()
export class AvFormContext {
  readonly validationBehavior = signal<AvFormValidationBehavior>('native');
  readonly validationErrors = signal<AvFormValidationErrors>({});
}
