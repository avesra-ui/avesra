import { CdkListbox } from '@angular/cdk/listbox';
import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  model,
  output,
  untracked,
} from '@angular/core';

import { AvListBoxContext } from './list-box.context';
import type { AvListBoxSelectionMode } from './list-box.context';
import { avListBoxClasses } from './list-box.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-list-box]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CdkListbox,
      inputs: ['cdkListboxDisabled: disabled'],
    },
  ],
  host: {
    '[class]': 'classes()',
    'data-slot': 'list-box',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.data-selection-mode]': 'selectionMode() !== "none" ? selectionMode() : null',
  },
  providers: [AvListBoxContext],
})
export class AvListBoxComponent {
  private readonly listBoxContext = inject(AvListBoxContext);
  private readonly cdkListbox = inject<CdkListbox<string>>(CdkListbox, { host: true });
  private readonly destroyRef = inject(DestroyRef);

  /** Accessible label for the listbox. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  /** How items can be selected. */
  readonly selectionMode = input<AvListBoxSelectionMode>('single', { alias: 'selection-mode' });

  /** Selected item ids. Supports two-way binding with `[(selectedKeys)]`. */
  readonly selectedKeys = model<string[]>([]);

  /** Disables all listbox items. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Emitted when a listbox item is activated. */
  readonly action = output<string>();

  protected readonly classes = computed(() => avListBoxClasses());

  constructor() {
    this.listBoxContext.registerSelectedKeysChangeHandler((keys) => {
      if (!this.arraysEqual(keys, this.selectedKeys())) {
        this.selectedKeys.set(keys);
      }
    });

    effect(() => {
      const selectionMode = this.selectionMode();
      const disabled = this.disabled();
      const selectedKeys = this.selectedKeys();

      untracked(() => {
        this.listBoxContext.selectionMode.set(selectionMode);
        this.listBoxContext.disabled.set(disabled);
        this.listBoxContext.setSelectedKeys(selectedKeys);
        this.cdkListbox.multiple = selectionMode === 'multiple';
      });
    });

    afterRenderEffect(() => {
      this.syncCdkSelection();
    });

    const subscription = this.cdkListbox.valueChange.subscribe((event) => {
      const mode = this.selectionMode();

      if (mode === 'none') {
        const key = event.value.at(-1);
        if (key) {
          this.action.emit(key);
        }
        this.cdkListbox.writeValue([]);
        return;
      }

      const next = [...event.value];
      if (!this.arraysEqual(next, this.selectedKeys())) {
        this.selectedKeys.set(next);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      this.listBoxContext.dispose();
    });
  }

  private getOptionValues(): string[] {
    const options = (this.cdkListbox as unknown as { options?: { map: (fn: (option: { value: string }) => string) => string[] } }).options;

    return options?.map((option) => option.value) ?? [];
  }

  private syncCdkSelection(): void {
    const selectionMode = this.selectionMode();
    const selectedKeys = this.selectedKeys();
    const nextValue = selectionMode === 'none' ? [] : [...selectedKeys];
    const optionValues = this.getOptionValues();
    const canSync =
      nextValue.length === 0 ||
      (optionValues.length > 0 &&
        !optionValues.some((value) => value == null) &&
        nextValue.every((key) => optionValues.includes(key)));

    if (!canSync) {
      return;
    }

    if (!this.arraysEqual(nextValue, [...this.cdkListbox.value])) {
      this.cdkListbox.writeValue(nextValue);
    }
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((value, index) => value === b[index]);
  }
}
