import { Injectable, signal } from '@angular/core';

import type { AvAvatarColor } from './avatar.utils';

@Injectable()
export class AvAvatarContext {
  readonly color = signal<AvAvatarColor>('default');
  readonly imageLoaded = signal(false);
  readonly imageErrored = signal(false);
  readonly hasImage = signal(false);
}
