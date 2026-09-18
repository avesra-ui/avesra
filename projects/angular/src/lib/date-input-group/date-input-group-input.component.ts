import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';

import { AvDateFieldContext } from '../date-field/date-field.context';
import { AvDateInputGroupSegmentComponent } from './date-input-group-segment.component';
import { avDateInputGroupInputClasses } from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-input-group-input]',
  imports: [AvDateInputGroupSegmentComponent],
  template: `
    @for (segment of segments(); track segment.id; let index = $index) {
      <span av-date-input-group-segment [segment]="segment" [index]="index"></span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'presentation',
    'data-slot': 'date-input-group-input',
    '(focusin)': 'onFocusIn()',
    '(focusout)': 'onFocusOut($event)',
  },
})
export class AvDateInputGroupInputComponent {
  private readonly fieldContext = inject(AvDateFieldContext);

  protected readonly classes = computed(() => avDateInputGroupInputClasses());
  protected readonly segments = computed(() => this.fieldContext.segments());

  protected onFocusIn(): void {
    this.fieldContext.focusWithin.set(true);
  }

  protected onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    const host = event.currentTarget as HTMLElement;
    if (!next || !host.contains(next)) {
      this.fieldContext.focusWithin.set(false);
      this.fieldContext.focusedSegmentIndex.set(null);
      this.fieldContext.rebuildSegments?.();
      this.fieldContext.markTouched?.();
    }
  }
}
