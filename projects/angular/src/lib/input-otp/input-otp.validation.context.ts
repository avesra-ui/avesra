import { Injectable, computed, signal } from '@angular/core';

/**
 * Validation state for Input OTP — consumed by FieldError / TextField integrations.
 * Provided by `AvInputOtpComponent` and synced from `invalid` + `validationErrors` inputs.
 */
@Injectable()
export class AvInputOtpValidationContext {
  readonly invalid = signal(false);
  readonly validationErrors = signal<string[]>([]);

  readonly hasErrors = computed(
    () => this.invalid() || this.validationErrors().length > 0,
  );

  readonly firstError = computed(() => this.validationErrors()[0] ?? null);
}
