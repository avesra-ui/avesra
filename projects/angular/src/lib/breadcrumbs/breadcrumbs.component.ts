import {
  AfterContentInit,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  TemplateRef,
  untracked,
} from '@angular/core';

import { AvBreadcrumbsContext } from './breadcrumbs.context';
import { AvBreadcrumbsItemComponent } from './breadcrumbs-item.component';
import { avBreadcrumbsClasses, avBreadcrumbsListClasses } from './breadcrumbs.utils';

@Component({
  selector: 'av-breadcrumbs',
  template: `
    <ol [class]="listClasses()">
      <ng-content />
    </ol>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'navigation',
    'aria-label': 'Breadcrumbs',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'breadcrumbs',
  },
  providers: [AvBreadcrumbsContext],
})
export class AvBreadcrumbsComponent implements AfterContentInit {
  private readonly context = inject(AvBreadcrumbsContext);
  private readonly items = contentChildren(AvBreadcrumbsItemComponent);

  /** Disables all breadcrumb links. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Custom separator template rendered between items. */
  readonly separator = input<TemplateRef<unknown> | null>(null);

  protected readonly classes = computed(() => avBreadcrumbsClasses());

  protected readonly listClasses = computed(() => avBreadcrumbsListClasses());

  constructor() {
    this.context.disabled.set(this.disabled());
    this.context.separatorTemplate.set(this.separator());

    effect(() => {
      const disabled = this.disabled();
      const separator = this.separator();

      untracked(() => {
        this.context.disabled.set(disabled);
        this.context.separatorTemplate.set(separator);
      });
    });
  }

  ngAfterContentInit(): void {
    const items = this.items();
    items.forEach((item, index) => {
      item.setIsLast(index === items.length - 1);
    });
  }
}
