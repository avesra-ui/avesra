import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvFieldsetContext {
  readonly disabled = signal(false);
}
