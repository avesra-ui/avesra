import {
  Component,
  computed,
  DestroyRef,
  HostAttributeToken,
  inject,
  input,
  numberAttribute,
  OnInit,
  signal,
} from '@angular/core';

import { AvAvatarContext } from './avatar.context';
import { avAvatarFallbackClasses } from './avatar.utils';
import type { AvAvatarColor } from './avatar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-avatar-fallback]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[hidden]': '!visible()',
    'data-slot': 'avatar-fallback',
  },
})
export class AvAvatarFallbackComponent implements OnInit {
  private readonly context = inject(AvAvatarContext);
  private readonly destroyRef = inject(DestroyRef);
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  /** Fallback color. Inherits from `av-avatar` when omitted. */
  readonly color = input<AvAvatarColor>();

  /** Delay in milliseconds before showing fallback while the image loads. */
  readonly delayMs = input(0, { alias: 'delay-ms', transform: numberAttribute });

  private readonly delayElapsed = signal(false);
  private delayTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly classes = computed(() =>
    [
      avAvatarFallbackClasses({
        color: this.color() ?? this.context.color(),
      }),
      this.hostClass,
    ]
      .filter(Boolean)
      .join(' '),
  );

  protected readonly visible = computed(() => {
    if (!this.context.hasImage()) {
      return true;
    }

    if (this.context.imageErrored()) {
      return true;
    }

    if (this.context.imageLoaded()) {
      return false;
    }

    return this.delayElapsed();
  });

  ngOnInit(): void {
    const delay = this.delayMs();

    if (delay > 0) {
      this.delayTimer = setTimeout(() => {
        this.delayElapsed.set(true);
      }, delay);
    } else {
      this.delayElapsed.set(true);
    }

    this.destroyRef.onDestroy(() => {
      if (this.delayTimer !== null) {
        clearTimeout(this.delayTimer);
      }
    });
  }
}
