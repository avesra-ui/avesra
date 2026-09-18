import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvRadioContext {
  readonly isSelected = signal(false);
}
