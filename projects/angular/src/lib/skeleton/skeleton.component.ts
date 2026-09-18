import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';

import { isAvSkeletonAnimationType, avSkeletonClasses } from './skeleton.utils';
import type { AvSkeletonAnimationType } from './skeleton.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-skeleton]',
  template: '',
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'skeleton',
  },
})
export class AvSkeletonComponent {
  private readonly host = inject(ElementRef<HTMLElement>);

  /** Animation type. Falls back to `--av-skeleton-animation`, then shimmer. */
  readonly animationType = input<AvSkeletonAnimationType | undefined>(undefined, {
    alias: 'animation-type',
  });

  private readonly cssAnimationType = signal<AvSkeletonAnimationType | undefined>(undefined);

  protected readonly resolvedAnimationType = computed(() => {
    const explicit = this.animationType();

    if (explicit) {
      return explicit;
    }

    return this.cssAnimationType() ?? 'shimmer';
  });

  protected readonly classes = computed(() =>
    avSkeletonClasses({
      animationType: this.resolvedAnimationType(),
    }),
  );

  constructor() {
    afterNextRender(() => {
      const value = getComputedStyle(this.host.nativeElement)
        .getPropertyValue('--av-skeleton-animation')
        .trim();

      if (isAvSkeletonAnimationType(value)) {
        this.cssAnimationType.set(value);
      }
    });
  }
}
