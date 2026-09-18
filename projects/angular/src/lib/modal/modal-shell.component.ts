import {
  afterNextRender,
  Component,
  computed,
  inject,
  Injector,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { AvModalContext } from './modal.context';
import {
  AV_MODAL_CONFIG,
  AV_MODAL_CONTENT,
  AV_MODAL_REF,
  type AvModalConfig,
  type AvModalContent,
} from './modal.tokens';
import {
  avModalContainerClasses,
  avModalResolveBackdropClasses,
} from './modal.utils';

/**
 * Internal shell used by {@link AvModalService} — backdrop + container + projected content.
 */
@Component({
  selector: 'av-modal-shell',
  template: `
    <div
      [class]="backdropClasses()"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="modal-backdrop"
      aria-hidden="true"
    ></div>
    <div
      [class]="containerClasses()"
      [attr.data-placement]="config.placement ?? 'auto'"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="modal-container"
      (animationend)="onContainerAnimationEnd($event)"
    >
      <ng-template #contentHost />
    </div>
  `,
  providers: [AvModalContext],
  host: {
    'data-slot': 'modal-shell',
    style: 'display: contents',
  },
})
export class AvModalShellComponent {
  private readonly context = inject(AvModalContext);
  private readonly dialogRef = inject(AV_MODAL_REF);
  private readonly content = inject<AvModalContent>(AV_MODAL_CONTENT);
  private readonly injector = inject(Injector);
  readonly config = inject<AvModalConfig>(AV_MODAL_CONFIG);

  private readonly contentHost = viewChild.required('contentHost', { read: ViewContainerRef });

  protected readonly animationState = computed(() => this.context.animationState());

  protected readonly backdropClasses = computed(() =>
    avModalResolveBackdropClasses(
      this.config.backdrop ?? 'opaque',
      this.config.backdropClass ?? '',
    ).join(' '),
  );

  protected readonly containerClasses = computed(() =>
    avModalContainerClasses({
      scroll: this.config.scroll ?? 'inside',
      size: this.config.size ?? 'md',
      className: this.config.containerClass ?? '',
    }),
  );

  constructor() {
    this.context.placement.set(this.config.placement ?? 'auto');
    this.context.scroll.set(this.config.scroll ?? 'inside');
    this.context.size.set(this.config.size ?? 'md');
    this.context.backdropVariant.set(this.config.backdrop ?? 'opaque');
    this.context.dismissable.set(this.config.dismissable ?? true);
    this.context.keyboardDismissDisabled.set(this.config.keyboardDismissDisabled ?? false);

    this.dialogRef._registerCloseHandler((result) => {
      this.context.close(result);
    });

    this.context.registerClosed((result) => {
      this.dialogRef._notifyClosed(result);
    });

    afterNextRender(() => {
      this.attachContent();
      this.context.open();
    });
  }

  protected onContainerAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }

  private attachContent(): void {
    const host = this.contentHost();
    host.clear();

    if (this.content instanceof TemplateRef) {
      host.createEmbeddedView(this.content);
      return;
    }

    host.createComponent(this.content as Type<unknown>, { injector: this.injector });
  }
}
