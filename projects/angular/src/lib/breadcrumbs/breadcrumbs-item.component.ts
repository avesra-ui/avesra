import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { AvBreadcrumbsContext } from './breadcrumbs.context';
import { AvBreadcrumbsSeparatorComponent } from './breadcrumbs-separator.component';
import { avBreadcrumbsItemClasses, avBreadcrumbsLinkClasses } from './breadcrumbs.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[av-breadcrumbs-item]',
  template: `
    <a
      [class]="linkClasses()"
      [attr.href]="isCurrent() ? null : resolvedHref()"
      [attr.aria-current]="isCurrent() ? 'page' : null"
      [attr.data-current]="isCurrent() ? 'true' : null"
      [attr.tabindex]="isCurrent() ? -1 : isDisabled() ? -1 : null"
      [attr.aria-disabled]="!isCurrent() && isDisabled() ? 'true' : null"
      [attr.data-disabled]="!isCurrent() && isDisabled() ? 'true' : null"
      data-slot="breadcrumbs-link"
      (click)="onLinkClick($event)"
    >
      <ng-content />
    </a>
    @if (!isCurrent()) {
      @if (separatorTemplate(); as template) {
        <ng-container [ngTemplateOutlet]="template" />
      } @else {
        <svg av-breadcrumbs-separator></svg>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'breadcrumbs-item',
  },
  imports: [AvBreadcrumbsSeparatorComponent, NgTemplateOutlet],
})
export class AvBreadcrumbsItemComponent {
  private readonly context = inject(AvBreadcrumbsContext);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly isLast = signal(false);

  /** Destination URL. Omit on the last item for the current page. */
  readonly href = input<string>();

  /** Marks this item as the current page. Auto-detected for the last item when omitted. */
  readonly current = input<boolean | undefined>(undefined);

  protected readonly classes = computed(() => avBreadcrumbsItemClasses());

  protected readonly linkClasses = computed(() => avBreadcrumbsLinkClasses());

  protected readonly isDisabled = computed(() => this.context.disabled());

  protected readonly separatorTemplate = computed(() => this.context.separatorTemplate());

  protected readonly isCurrent = computed(() => {
    const explicit = this.current();
    if (explicit !== undefined) {
      return explicit;
    }
    return this.isLast();
  });

  protected readonly resolvedHref = computed(() => this.href() ?? '#');

  setIsLast(isLast: boolean): void {
    this.isLast.set(isLast);
    this.cdr.markForCheck();
  }

  protected onLinkClick(event: MouseEvent): void {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
