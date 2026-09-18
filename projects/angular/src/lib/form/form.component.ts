import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvFormContext } from './form.context';
import {
  avFormClasses,
  type AvFormValidationBehavior,
  type AvFormValidationErrors,
} from './form.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form[av-form]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.action]': 'action() || null',
    '[attr.method]': 'method() || null',
    '[attr.enctype]': 'encType() || null',
    '[attr.target]': 'target() || null',
    '[attr.novalidate]': 'noValidate() ? "" : null',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-labelledby]': 'ariaLabelledby() || null',
    'data-slot': 'form',
  },
  providers: [AvFormContext],
})
export class AvFormComponent {
  private readonly context = inject(AvFormContext);
  private readonly elementRef = inject(ElementRef<HTMLFormElement>);
  private readonly destroyRef = inject(DestroyRef);

  /** URL to submit form data to. */
  readonly action = input<string>();

  /** HTTP method for submission. */
  readonly method = input<'get' | 'post'>();

  /** Encoding type for form data. */
  readonly encType = input<
    'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
  >(undefined, { alias: 'enctype' });

  /** Where to display the response after submission. */
  readonly target = input<'_self' | '_blank' | '_parent' | '_top'>();

  /** Disables native browser validation. */
  readonly noValidate = input(false, { alias: 'novalidate', transform: booleanAttribute });

  /** Accessibility label for the form landmark. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** ID of the element that labels the form. */
  readonly ariaLabelledby = input<string>(undefined, { alias: 'aria-labelledby' });

  /** Validation display mode — `native` blocks submit; `aria` shows realtime errors. */
  readonly validationBehavior = input<AvFormValidationBehavior>('native');

  /** Server-side validation errors keyed by field name. */
  readonly validationErrors = input<AvFormValidationErrors>({});

  protected readonly classes = computed(() => avFormClasses());

  private readonly onInvalid = (event: Event): void => {
    if (event.defaultPrevented) {
      return;
    }

    const form = this.elementRef.nativeElement;
    const firstInvalid = form.querySelector(':invalid');

    if (firstInvalid instanceof HTMLElement) {
      firstInvalid.focus();
    }
  };

  constructor() {
    effect(() => {
      const validationBehavior = this.validationBehavior();
      const validationErrors = this.validationErrors();

      untracked(() => {
        this.context.validationBehavior.set(validationBehavior);
        this.context.validationErrors.set(validationErrors);
      });
    });

    afterNextRender(() => {
      const form = this.elementRef.nativeElement;

      form.addEventListener('invalid', this.onInvalid, true);
      this.destroyRef.onDestroy(() => {
        form.removeEventListener('invalid', this.onInvalid, true);
      });
    });
  }
}
