import {
  Component,
  computed,
  effect,
  HostAttributeToken,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvAvatarContext } from './avatar.context';
import { avAvatarClasses } from './avatar.utils';
import type { AvAvatarColor, AvAvatarSize, AvAvatarVariant } from './avatar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-avatar]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'avatar',
  },
  providers: [AvAvatarContext],
})
export class AvAvatarComponent {
  private readonly context = inject(AvAvatarContext);
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  /** Fallback text color when used inside `av-avatar-fallback`. */
  readonly color = input<AvAvatarColor>('default');

  /** Avatar size. */
  readonly size = input<AvAvatarSize>('md');

  /** Visual style variant. */
  readonly variant = input<AvAvatarVariant>('default');

  protected readonly classes = computed(() =>
    [avAvatarClasses({ size: this.size(), variant: this.variant() }), this.hostClass]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      this.context.color.set(this.color());
    });

    let previousOptionsKey: string | undefined;

    effect(() => {
      const optionsKey = `${this.size()}|${this.variant()}|${this.color()}`;

      if (previousOptionsKey !== undefined && previousOptionsKey !== optionsKey) {
        untracked(() => {
          this.context.hasImage.set(false);
          this.context.imageLoaded.set(false);
          this.context.imageErrored.set(false);
        });
      }

      previousOptionsKey = optionsKey;
    });
  }
}
