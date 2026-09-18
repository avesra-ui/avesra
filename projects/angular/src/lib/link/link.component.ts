import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { isExternalUrl, avLinkClasses } from './link.utils';
import type { AvLinkUnderline, AvLinkVariant } from './link.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[av-link]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.href]': 'isDisabled() ? null : href()',
    '[attr.target]': 'resolvedTarget()',
    '[attr.rel]': 'resolvedRel()',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-external]': 'isExternal() ? "true" : null',
    'data-slot': 'link',
    '(click)': 'onClick($event)',
  },
})
export class AvLinkComponent {
  /** Destination URL. */
  readonly href = input<string>('#');

  /** Visual style variant. */
  readonly variant = input<AvLinkVariant>('primary');

  /** Underline display behavior. */
  readonly underline = input<AvLinkUnderline>('hover');

  /** Disables navigation. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Opens in a new tab. Auto-detected for external URLs when omitted. */
  readonly external = input<boolean>();

  /** Link target attribute. */
  readonly target = input<string>();

  /** Link rel attribute. */
  readonly rel = input<string>();

  protected readonly classes = computed(() =>
    avLinkClasses({
      variant: this.variant(),
      underline: this.underline(),
    }),
  );

  protected readonly isDisabled = computed(() => this.disabled());

  protected readonly isExternal = computed(() => {
    const explicit = this.external();
    if (explicit !== undefined) {
      return explicit;
    }
    return isExternalUrl(this.href());
  });

  protected readonly resolvedTarget = computed(() => {
    const target = this.target();
    if (target) {
      return target;
    }
    return this.isExternal() ? '_blank' : null;
  });

  protected readonly resolvedRel = computed(() => {
    const rel = this.rel();
    if (rel) {
      return rel;
    }
    if (this.resolvedTarget() === '_blank') {
      return 'noopener noreferrer';
    }
    return null;
  });

  protected onClick(event: MouseEvent): void {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
