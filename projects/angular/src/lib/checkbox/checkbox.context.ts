import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvCheckboxContext {
  readonly isSelected = signal(false);
  readonly isIndeterminate = signal(false);
}
