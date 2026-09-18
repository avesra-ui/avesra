import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvPaginationContext } from './pagination.context';
import { avPaginationClasses } from './pagination.utils';
import type { AvPaginationSize } from './pagination.utils';

@Component({
  selector: 'av-pagination',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'navigation',
    'aria-label': 'pagination',
    'data-slot': 'pagination',
  },
  providers: [AvPaginationContext],
})
export class AvPaginationComponent {
  private readonly context = inject(AvPaginationContext);

  /** Pagination size. */
  readonly size = input<AvPaginationSize>('md');

  protected readonly classes = computed(() => avPaginationClasses({ size: this.size() }));

  constructor() {
    effect(() => {
      const size = this.size();

      untracked(() => {
        this.context.size.set(size);
      });
    });
  }
}
