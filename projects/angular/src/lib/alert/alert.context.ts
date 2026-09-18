import { Injectable, signal } from '@angular/core';

import type { AvAlertStatus } from './alert.utils';

@Injectable()
export class AvAlertContext {
  readonly status = signal<AvAlertStatus>('default');
}
