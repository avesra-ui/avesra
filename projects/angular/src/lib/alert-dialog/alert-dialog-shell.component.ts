import { A11yModule } from '@angular/cdk/a11y';
import {
  Component,
  computed,
  inject,
} from '@angular/core';

import { AvButtonComponent } from '../button/button.component';
import { AvAlertDialogBodyComponent } from './alert-dialog-body.component';
import { AvAlertDialogCloseDirective } from './alert-dialog-close.directive';
import { AvAlertDialogCloseTriggerComponent } from './alert-dialog-close-trigger.component';
import { AvAlertDialogDialogComponent } from './alert-dialog-dialog.component';
import { AvAlertDialogFooterComponent } from './alert-dialog-footer.component';
import { AvAlertDialogHeaderComponent } from './alert-dialog-header.component';
import { AvAlertDialogHeadingComponent } from './alert-dialog-heading.component';
import { AvAlertDialogIconComponent } from './alert-dialog-icon.component';
import { AvAlertDialogContext } from './alert-dialog.context';
import {
  AV_ALERT_DIALOG_OPTIONS,
  AV_ALERT_DIALOG_REF,
  type AvAlertDialogOptions,
} from './alert-dialog.tokens';
import {
  avAlertDialogContainerClasses,
  avAlertDialogResolveBackdropClasses,
} from './alert-dialog.utils';

/**
 * Internal shell used by {@link AvAlertDialogService} to render confirm UI.
 */
@Component({
  selector: 'av-alert-dialog-shell',
  imports: [
    A11yModule,
    AvAlertDialogDialogComponent,
    AvAlertDialogHeaderComponent,
    AvAlertDialogIconComponent,
    AvAlertDialogHeadingComponent,
    AvAlertDialogBodyComponent,
    AvAlertDialogFooterComponent,
    AvAlertDialogCloseTriggerComponent,
    AvAlertDialogCloseDirective,
    AvButtonComponent,
  ],
  template: `
    <div
      [class]="backdropClasses()"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="alert-dialog-backdrop"
      aria-hidden="true"
    ></div>
    <div
      [class]="containerClasses()"
      [attr.data-placement]="options.placement ?? 'center'"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="alert-dialog-container"
      (animationend)="onContainerAnimationEnd($event)"
    >
      <div av-alert-dialog-dialog>
        @if (options.showCloseTrigger) {
          <av-alert-dialog-close-trigger />
        }
        <div av-alert-dialog-header>
          @if (options.status) {
            <div av-alert-dialog-icon [status]="options.status"></div>
          }
          @if (options.title) {
            <h2 av-alert-dialog-heading>{{ options.title }}</h2>
          }
        </div>
        @if (options.description) {
          <div av-alert-dialog-body>
            <p>{{ options.description }}</p>
          </div>
        }
        <div av-alert-dialog-footer>
          @if (options.cancelText !== null) {
            <button
              av-button
              variant="tertiary"
              type="button"
              [av-alert-dialog-close]="'cancel'"
            >
              {{ options.cancelText ?? 'Cancel' }}
            </button>
          }
          @if (options.confirmText !== null) {
            <button
              av-button
              [variant]="confirmVariant()"
              type="button"
              [av-alert-dialog-close]="'confirm'"
            >
              {{ options.confirmText ?? 'Continue' }}
            </button>
          }
        </div>
      </div>
    </div>
  `,
  providers: [AvAlertDialogContext],
  host: {
    'data-slot': 'alert-dialog-shell',
    style: 'display: contents',
  },
})
export class AvAlertDialogShellComponent {
  private readonly context = inject(AvAlertDialogContext);
  private readonly dialogRef = inject(AV_ALERT_DIALOG_REF);
  readonly options = inject<AvAlertDialogOptions>(AV_ALERT_DIALOG_OPTIONS);

  protected readonly animationState = computed(() => this.context.animationState());

  protected readonly backdropClasses = computed(() =>
    avAlertDialogResolveBackdropClasses(
      this.options.backdrop ?? 'opaque',
      this.options.backdropClass ?? '',
    ).join(' '),
  );

  protected readonly containerClasses = computed(() =>
    avAlertDialogContainerClasses({
      scroll: this.options.scroll ?? 'inside',
      className: this.options.containerClass ?? '',
    }),
  );

  protected readonly confirmVariant = computed(() =>
    this.options.status === 'danger' ? 'danger' : 'primary',
  );

  constructor() {
    this.context.placement.set(this.options.placement ?? 'center');
    this.context.scroll.set(this.options.scroll ?? 'inside');
    this.context.size.set(this.options.size ?? 'md');
    this.context.backdropVariant.set(this.options.backdrop ?? 'opaque');
    this.context.dismissable.set(this.options.dismissable ?? false);
    this.context.keyboardDismissDisabled.set(this.options.keyboardDismissDisabled ?? true);

    this.dialogRef._registerCloseHandler((result) => {
      this.context.close(result);
    });

    this.context.registerClosed((result) => {
      this.dialogRef._notifyClosed(result);
    });

    // Open after providers are ready so enter animation runs.
    queueMicrotask(() => this.context.open());
  }

  protected onContainerAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }
}
