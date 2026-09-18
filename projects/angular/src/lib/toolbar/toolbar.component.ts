import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvSeparatorContext } from '../separator/separator.context';
import type { AvSeparatorOrientation } from '../separator/separator.utils';
import { AvToolbarContext } from './toolbar.context';
import { avToolbarClasses } from './toolbar.utils';
import type { AvToolbarOrientation } from './toolbar.utils';

@Component({
  selector: 'av-toolbar',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'toolbar',
    '[attr.aria-orientation]': 'orientation()',
    '[attr.aria-label]': 'ariaLabel() || null',
    'data-slot': 'toolbar',
  },
  providers: [AvToolbarContext, AvSeparatorContext],
})
export class AvToolbarComponent {
  private readonly toolbarContext = inject(AvToolbarContext);
  private readonly separatorContext = inject(AvSeparatorContext);

  /** Layout direction of the toolbar. */
  readonly orientation = input<AvToolbarOrientation>('horizontal');

  /** Renders a raised surface background around the toolbar. */
  readonly attached = input(false, { transform: booleanAttribute });

  /** Accessible label for the toolbar. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  protected readonly classes = computed(() =>
    avToolbarClasses({
      orientation: this.orientation(),
      attached: this.attached(),
    }),
  );

  constructor() {
    effect(() => {
      const orientation = this.orientation();
      const separatorOrientation: AvSeparatorOrientation =
        orientation === 'horizontal' ? 'vertical' : 'horizontal';

      untracked(() => {
        this.toolbarContext.orientation.set(orientation);
        this.separatorContext.orientation.set(separatorOrientation);
      });
    });
  }
}
