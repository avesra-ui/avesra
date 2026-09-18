import { CdkOption } from '@angular/cdk/listbox';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
} from '@angular/core';

import { AvListBoxContext } from '../list-box/list-box.context';
import { avListBoxItemClasses } from './list-box-item.utils';
import type { AvListBoxItemVariant } from './list-box-item.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-list-box-item]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CdkOption,
      inputs: ['cdkOptionDisabled: disabled', 'cdkOptionTypeaheadLabel: textValue'],
    },
  ],
  host: {
    '[class]': 'classes()',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'list-box-item',
  },
})
export class AvListBoxItemComponent implements OnInit {
  private readonly listBoxContext = inject(AvListBoxContext);
  private readonly cdkOption = inject(CdkOption, { host: true });

  /** Unique item id. */
  readonly itemId = input.required<string>({ alias: 'id' });

  /** Accessible label used for typeahead search. */
  readonly textValue = input<string>();

  /** Visual style variant. */
  readonly variant = input<AvListBoxItemVariant>('default');

  /** Disables the item. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avListBoxItemClasses({ variant: this.variant() }));

  protected readonly isDisabled = computed(
    () => this.disabled() || this.listBoxContext.disabled(),
  );

  readonly isSelected = computed(() => this.listBoxContext.isSelected(this.itemId()));

  constructor() {
    effect(() => {
      this.syncCdkOptionValue();
    });
  }

  ngOnInit(): void {
    this.syncCdkOptionValue();
  }

  private syncCdkOptionValue(): void {
    this.cdkOption.value = this.itemId();
  }
}
