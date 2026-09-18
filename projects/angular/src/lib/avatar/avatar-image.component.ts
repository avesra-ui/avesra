import { Component, computed, effect, HostAttributeToken, inject, input } from '@angular/core';

import { AvAvatarContext } from './avatar.context';
import { avAvatarImageClasses } from './avatar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'img[av-avatar-image]',
  template: '',
  host: {
    '[class]': 'classes()',
    '[attr.src]': 'src() || null',
    '[attr.alt]': 'alt() || null',
    '[attr.srcset]': 'srcset() || null',
    '[attr.sizes]': 'sizes() || null',
    '[attr.crossorigin]': 'crossOrigin() || null',
    '[attr.loading]': 'loading() || null',
    '[attr.data-loaded]': 'isLoaded() ? "true" : null',
    'data-slot': 'avatar-image',
    '(load)': 'onLoad()',
    '(error)': 'onError()',
  },
})
export class AvAvatarImageComponent {
  private readonly context = inject(AvAvatarContext);
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  /** Image source URL. */
  readonly src = input<string>();

  /** Accessible alternative text. */
  readonly alt = input<string>();

  /** Responsive image source set. */
  readonly srcset = input<string>();

  /** Image sizes hint for responsive images. */
  readonly sizes = input<string>();

  /** CORS setting for the image request. */
  readonly crossOrigin = input<'anonymous' | 'use-credentials'>(undefined, {
    alias: 'crossorigin',
  });

  /** Native loading behavior. */
  readonly loading = input<'eager' | 'lazy'>();

  protected readonly classes = computed(() =>
    [avAvatarImageClasses(), this.hostClass].filter(Boolean).join(' '),
  );

  protected readonly isLoaded = computed(
    () => this.context.imageLoaded() && !this.context.imageErrored(),
  );

  constructor() {
    effect(() => {
      this.context.hasImage.set(true);
    });
  }

  protected onLoad(): void {
    this.context.imageErrored.set(false);
    this.context.imageLoaded.set(true);
  }

  protected onError(): void {
    this.context.imageLoaded.set(false);
    this.context.imageErrored.set(true);
  }
}
