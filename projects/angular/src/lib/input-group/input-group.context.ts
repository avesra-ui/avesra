import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvInputGroupContext {
  readonly disabled = signal(false);
  readonly invalid = signal(false);
}
